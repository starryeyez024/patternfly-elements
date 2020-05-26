const { task, src, dest, watch, parallel, series } = require("gulp");

const pfelementPackage = require("./package.json");
const version = pfelementPackage.version;
const elementName = pfelementPackage.pfelement.elementName;

const paths = {
  source: "./src",
  compiled: "./",
  temp: "./_temp"
};

const clean = require("gulp-clean");
const fs = require("fs");
const mergeStream = require("merge-stream");
const globSass = require("gulp-sass-globbing");
const StyleDictionary = require("style-dictionary");
const _ = require("lodash");

StyleDictionary.registerTransform({
  name: "name/value/default",
  type: "value",
  transformer: function(prop, options) {
    return `\t${prop.value} !default`;
  }
});

StyleDictionary.registerTransform({
  name: "attribute/bem",
  type: "name",
  transformer: function(prop, options) {
    return `${options.prefix}--${_.pull(prop.path, "default").join("--")}`;
  }
});

StyleDictionary.registerTransformGroup({
  name: "pf-custom/scss",
  transforms: StyleDictionary.transformGroup["scss"].concat([
    "name/value/default"
  ])
});

StyleDictionary.registerTransformGroup({
  name: "pfe-custom/scss",
  transforms: StyleDictionary.transformGroup["scss"].concat(["attribute/bem"])
});

StyleDictionary.registerFormat({
  name: "scss/bem/map-deep",
  formatter: _.template(
    fs.readFileSync("../../tokens/templates/.scss-bem.template")
  )
});

const variables = StyleDictionary.extend({
  source: ["../../tokens/color/*.json"],
  platforms: {
    scss: {
      prefix: "pf",
      buildPath: "variables/",
      transformGroup: "pf-custom/scss",
      files: [
        {
          destination: "_colors.scss",
          format: "scss/variables"
        }
      ]
    }
  }
});

const theme = StyleDictionary.extend({
  source: ["../../tokens/typography/broadcasted.json"],
  platforms: {
    scss: {
      prefix: "pfe-broadcasted",
      buildPath: "maps/",
      transformGroup: "pfe-custom/scss",
      files: [
        {
          destination: "_broadcasted.scss",
          format: "scss/bem/map-deep",
          mapName: "pfe-broadcasted"
        }
      ]
    }
  }
});

// Delete the temp directory
task("clean", () => {
  return src(["__*.scss"], {
    cwd: paths.compiled,
    read: false,
    allowEmpty: true
  }).pipe(clean());
});

// Build design tokens
task("tokens", cb => {
  variables.buildPlatform("scss");
  theme.buildPlatform("scss");
  return cb();
});

// Custom gulp for sass globbing
task("sass:globbing", () => {
  let stream = mergeStream();
  ["extends", "functions", "maps", "mixins", "variables"].forEach(folder => {
    stream.add(
      src([`${folder}/_*.scss`])
        .pipe(
          globSass(
            {
              path: `__${folder}.scss`
            },
            {
              signature: `// generated with sass globbing, v${version}`
            }
          )
        )
        .pipe(dest(paths.compiled))
    );
  });

  return stream;
});

task("build", series("clean", "tokens", "sass:globbing"));

task("watch", () => {
  return watch(
    ["{extends,functions,maps,mixins,variables}/_*.scss", "pfe-sass.scss"],
    {
      cwd: paths.compiled
    },
    series("build")
  );
});

task("dev", parallel("build", "watch"));

task("default", series("build"));
