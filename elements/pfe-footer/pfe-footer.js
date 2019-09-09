import PFElement from '../pfelement/pfelement.js';
import '../pfe-collapse/pfe-collapse.js';
import '../pfe-icon/pfe-icon.js';

/*!
 * PatternFly Elements: PfeFooter 1.0.0-prerelease.16
 * @license
 * Copyright 2019 Red Hat, Inc.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
*/

function generateId() {
  return Math.random()
    .toString(36)
    .substr(2, 9);
}

class PfeFooter extends PFElement {
  static get version() {
    return "1.0.0-prerelease.16";
  }

  get html() {
    return `<style>:host(pfe-footer){display:block;grid-template-columns:1fr!important}:host([hidden]){display:none}:host *,:host ::after,:host ::before{-webkit-box-sizing:border-box;box-sizing:border-box}.pfe-footer-menus{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.pfe-footer-menus .pfe-footer-info h2,.pfe-footer-menus .pfe-footer-links h2{margin:0;font-size:.875rem;line-height:1.5em;text-transform:uppercase}.pfe-footer-menus .pfe-footer-info li,.pfe-footer-menus .pfe-footer-links li{margin:0;padding:0 1rem 1rem 0}.pfe-footer-menus .pfe-footer-info a:focus,.pfe-footer-menus .pfe-footer-links a:focus{outline-offset:1px;outline-style:dotted;outline-width:1px;outline-color:#fff}.pfe-footer-menus .pfe-footer-info>section,.pfe-footer-menus .pfe-footer-links>section{padding:2rem 2rem 0}.pfe-footer-menus .pfe-footer-links{padding-bottom:2rem}.pfe-footer-menus .pfe-footer-links h2{line-height:1em}.pfe-footer-menus .pfe-footer-links h2 button,.pfe-footer-menus .pfe-footer-links h2 pfe-collapse-toggle{display:block;margin:0;padding:0 0 0 1.5rem;width:100%;text-align:left;border:0;background:0 0;-webkit-appearance:none;-moz-appearance:none;font-size:1em;line-height:1em;text-transform:uppercase;color:#fff;font-weight:600}.pfe-footer-menus .pfe-footer-links h2 button:focus,.pfe-footer-menus .pfe-footer-links h2 pfe-collapse-toggle:focus{outline-offset:1px;outline-style:dotted;outline-width:1px;outline-color:#fff}.pfe-footer-menus .pfe-footer-links h2 button::before,.pfe-footer-menus .pfe-footer-links h2 pfe-collapse-toggle::before{position:relative;float:left;content:"";display:inline-block;margin-left:-1.5rem;width:.5rem;height:.5rem;border-right:.094rem solid #fff;border-bottom:.094rem solid #fff;-webkit-transform:rotate(-45deg) translate(-.1rem,.1rem);transform:rotate(-45deg) translate(-.1rem,.1rem)}.pfe-footer-menus .pfe-footer-links h2 button[aria-expanded=true]::before,.pfe-footer-menus .pfe-footer-links h2 pfe-collapse-toggle[aria-expanded=true]::before{-webkit-transform:rotate(45deg) translate(0,.1rem);transform:rotate(45deg) translate(0,.1rem)}@media screen and (min-width:992px){.pfe-footer-menus .pfe-footer-links h2 button,.pfe-footer-menus .pfe-footer-links h2 pfe-collapse-toggle{padding-left:0}.pfe-footer-menus .pfe-footer-links h2 button::before,.pfe-footer-menus .pfe-footer-links h2 pfe-collapse-toggle::before{display:none}}.pfe-footer-menus .pfe-footer-links ul{margin:1.125rem 0 0 1.5rem;padding:0;list-style:none}.pfe-footer-menus .pfe-footer-links li:last-child{margin-bottom:0}.pfe-footer-menus .pfe-footer-links a,.pfe-footer-menus .pfe-footer-links a:visited{color:#ccc;text-decoration:none}.pfe-footer-menus .pfe-footer-links a:hover{color:#fff;text-decoration:underline}@media screen and (min-width:768px){.pfe-footer-menus .pfe-footer-links{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}}@media screen and (min-width:992px){.pfe-footer-menus .pfe-footer-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-right:2rem}.pfe-footer-menus .pfe-footer-links ul{margin-left:0}@supports (display:grid){.pfe-footer-menus .pfe-footer-links{display:grid;grid-template-columns:repeat(auto-fit,minmax(25%,1fr))}}}@media screen and (min-width:768px){@supports (display:grid){.pfe-footer-menus{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:"footerLinks siteInfo" "legalInfo legalInfo"}.pfe-footer-menus slot[name=pfe-footer-legal]::slotted(*){grid-area:legalInfo}.pfe-footer-menus .pfe-footer-info{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.pfe-footer-menus slot[name=pfe-footer-info]::slotted(*){width:100%;grid-area:siteInfo}.pfe-footer-menus .pfe-footer-links{width:100%;grid-area:footerLinks}}}@media screen and (min-width:992px){@supports (display:grid){.pfe-footer-menus{grid-template-columns:2fr 1fr}.pfe-footer-menus .pfe-footer-links{display:grid;grid-template-columns:repeat(auto-fit,minmax(25%,1fr))}}}.pfe-footer-wrapper,.pfe-legal-wrapper{margin:0 auto;max-width:1140px}:host([pfe-layout=left-aligned]) .pfe-footer-wrapper,:host([pfe-layout=left-aligned]) .pfe-legal-wrapper{margin:0}:host([pfe-layout=left-aligned]) .pfe-footer-wrapper.pfe-legal-wrapper,:host([pfe-layout=left-aligned]) .pfe-legal-wrapper.pfe-legal-wrapper{max-width:none}.pfe-legal-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}@media screen and (min-width:768px){.pfe-legal-wrapper{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}.pfe-footer-universal{background:#1a1a1a}.brand{padding:2rem 2rem 0}@media screen and (min-width:768px){.brand{padding:2rem}}.brand a{display:block}.brand a:focus{outline-offset:1px;outline-style:dotted;outline-width:1px;outline-color:#fff}.brand svg{height:2.5em}.summit-logo{padding:1rem 2rem 2rem}@media screen and (min-width:768px){.summit-logo{padding:2rem}}.summit-logo a{display:block}.summit-logo a:focus{outline-offset:1px;outline-style:dotted;outline-width:1px;outline-color:#fff}.summit-logo svg{height:2.188rem}</style><footer>
  ${(this.has_slot("pfe-footer-info") || this.hasFooterLinks) ? `
  <div class="pfe-footer-wrapper">
    <div class="pfe-footer-menus">
      ${(this.has_slot("pfe-footer-info")) ? `
      <div class="pfe-footer-info">
        <slot name="pfe-footer-info"></slot>
      </div>
      ` : ""}
      ${(this.hasFooterLinks) ? `
      <div class="pfe-footer-links">
        ${this._sections.map(section => `
          <section>
            <pfe-collapse>
              <h2><pfe-collapse-toggle>${section.buttonText}</pfe-collapse-toggle></h2>
              <pfe-collapse-panel>
              ${section.list}
              </pfe-collapse-panel>
            </pfe-collapse>
          </section>
        `).join("\n")}
      </div>
      ` : ""}
    </div>
  </div>
  ` : ""}
  ${(this.has_slot("pfe-footer-legal")) ? `
  <div class="pfe-footer-universal">
    <div class="pfe-legal-wrapper">
      <div class="brand">
        <a href="https://redhat.com">
          <svg data-name="Red Hat Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 613 145"><defs><style>.red-hat-red{fill:#e00;}.red-hat-white{fill:#fff;}</style></defs><title>Red Hat Logo</title><path class="red-hat-red" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"/><path d="M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33l3.66-9.06A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45,12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42Z"/><path class="red-hat-white" d="M579.74,92.8c0,11.89,7.15,17.67,20.19,17.67a52.11,52.11,0,0,0,11.89-1.68V95a24.84,24.84,0,0,1-7.68,1.16c-5.37,0-7.36-1.68-7.36-6.73V68.3h15.56V54.1H596.78v-18l-17,3.68V54.1H568.49V68.3h11.25Zm-53,.32c0-3.68,3.69-5.47,9.26-5.47a43.12,43.12,0,0,1,10.1,1.26v7.15a21.51,21.51,0,0,1-10.63,2.63c-5.46,0-8.73-2.1-8.73-5.57m5.2,17.56c6,0,10.84-1.26,15.36-4.31v3.37h16.82V74.08c0-13.56-9.14-21-24.39-21-8.52,0-16.94,2-26,6.1l6.1,12.52c6.52-2.74,12-4.42,16.83-4.42,7,0,10.62,2.73,10.62,8.31v2.73a49.53,49.53,0,0,0-12.62-1.58c-14.31,0-22.93,6-22.93,16.73,0,9.78,7.78,17.24,20.19,17.24m-92.44-.94h18.09V80.92h30.29v28.82H506V36.12H487.93V64.41H457.64V36.12H439.55ZM370.62,81.87c0-8,6.31-14.1,14.62-14.1A17.22,17.22,0,0,1,397,72.09V91.54A16.36,16.36,0,0,1,385.24,96c-8.2,0-14.62-6.1-14.62-14.09m26.61,27.87h16.83V32.44l-17,3.68V57.05a28.3,28.3,0,0,0-14.2-3.68c-16.19,0-28.92,12.51-28.92,28.5a28.25,28.25,0,0,0,28.4,28.6,25.12,25.12,0,0,0,14.93-4.83ZM320,67c5.36,0,9.88,3.47,11.67,8.83H308.47C310.15,70.3,314.36,67,320,67M291.33,82c0,16.2,13.25,28.82,30.28,28.82,9.36,0,16.2-2.53,23.25-8.42l-11.26-10c-2.63,2.74-6.52,4.21-11.14,4.21a14.39,14.39,0,0,1-13.68-8.83h39.65V83.55c0-17.67-11.88-30.39-28.08-30.39a28.57,28.57,0,0,0-29,28.81M262,51.58c6,0,9.36,3.78,9.36,8.31S268,68.2,262,68.2H244.11V51.58Zm-36,58.16h18.09V82.92h13.77l13.89,26.82H292l-16.2-29.45a22.27,22.27,0,0,0,13.88-20.72c0-13.25-10.41-23.45-26-23.45H226Z"/></svg>
        </a>
      </div>
      <slot name="pfe-footer-legal"></slot>
      <div class="summit-logo">
        <a href="http://www.redhat.com/summit/">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      	 viewBox="0 0 432 203.7" xml:space="preserve">
            <style type="text/css">
            	.summit-red {fill:#CC0000;}
            	.summit-red-dark {fill:#A30000;}
            	.summit-white {fill:#FFFFFF;}
            </style>
            <title>Red Hat Summit Logo</title>
            <g>
            	<polygon class="summit-red" points="432,0 0.02,0 0.02,173.18 185.49,173.18 216.01,203.7 246.53,173.18 432,173.18 	"/>
            	<polyline class="summit-red-dark" points="0.02,173.18 185.49,173.18 216.01,203.7 246.53,173.18 432,173.18 432,0 	"/>
            	<g>
            		<path class="summit-white" d="M135.04,61.76l-5.01-10.34h-3.43v10.34h-8.32V31.1h13.71c1.78,0,3.41,0.18,4.89,0.55
            			c1.47,0.36,2.74,0.94,3.79,1.73c1.05,0.79,1.86,1.82,2.43,3.09c0.57,1.27,0.85,2.81,0.85,4.62c0,2.31-0.5,4.19-1.49,5.65
            			c-0.99,1.46-2.34,2.57-4.04,3.33l6.15,11.7H135.04z M134.64,38.94c-0.57-0.61-1.53-0.92-2.88-0.92h-5.15v6.7h5.02
            			c1.41,0,2.41-0.29,2.99-0.87c0.59-0.58,0.88-1.43,0.88-2.54C135.5,40.34,135.21,39.55,134.64,38.94z"/>
            		<path class="summit-white" d="M150.07,61.76V31.1h23.48v7.14h-15.07v4.12h9.07v7.01h-9.07v5.26h15.38v7.14H150.07z"/>
            		<path class="summit-white" d="M205.4,53.55c-0.7,1.97-1.75,3.56-3.15,4.77c-1.4,1.21-3.13,2.09-5.19,2.63c-2.06,0.54-4.45,0.81-7.16,0.81
            			h-9.94V31.1h10.73c2.39,0,4.57,0.25,6.53,0.74c1.96,0.5,3.61,1.34,4.97,2.52c1.36,1.18,2.41,2.74,3.15,4.67
            			c0.75,1.93,1.12,4.34,1.12,7.23C206.45,49.14,206.1,51.57,205.4,53.55z M197.36,42.75c-0.25-1.02-0.65-1.85-1.2-2.5
            			c-0.56-0.64-1.29-1.12-2.19-1.42c-0.91-0.31-2.02-0.46-3.33-0.46h-2.1v16.12h1.84c1.31,0,2.44-0.14,3.37-0.42
            			c0.93-0.28,1.7-0.73,2.3-1.36c0.6-0.63,1.03-1.46,1.29-2.5c0.26-1.04,0.39-2.31,0.39-3.83C197.74,44.98,197.61,43.77,197.36,42.75
            			z"/>
            		<path class="summit-white" d="M246.45,61.76V49.67h-9.55v12.09h-8.67V31.1h8.67v11.17h9.55V31.1h8.67v30.66H246.45z"/>
            		<path class="summit-white" d="M281.41,61.76l-1.66-5.39h-9.2l-1.66,5.39h-9.11L270.9,31.1h8.59l11.13,30.66H281.41z M277.12,47.61
            			c-0.26-0.99-0.5-1.85-0.7-2.58c-0.2-0.73-0.39-1.39-0.55-1.97c-0.16-0.58-0.3-1.12-0.42-1.6c-0.12-0.48-0.22-0.99-0.31-1.51
            			c-0.09,0.53-0.19,1.04-0.31,1.53c-0.12,0.5-0.26,1.04-0.42,1.62c-0.16,0.58-0.34,1.24-0.55,1.97c-0.2,0.73-0.44,1.58-0.7,2.54
            			l-0.57,2.02h5.08L277.12,47.61z"/>
            		<path class="summit-white" d="M306.25,38.5v23.26h-8.5V38.5h-8.59v-7.4h25.67v7.4H306.25z"/>
            		<path class="summit-white" d="M91.08,130.17c-1.26,2.51-3.01,4.56-5.26,6.13c-2.25,1.58-4.92,2.75-8.02,3.51
            			c-3.1,0.76-6.48,1.14-10.16,1.14c-4.96,0-9.71-0.72-14.24-2.15c-4.53-1.43-8.4-3.2-11.61-5.3l8.24-13.32
            			c1.11,0.76,2.41,1.5,3.9,2.23c1.49,0.73,3.04,1.39,4.64,1.97c1.61,0.58,3.23,1.05,4.86,1.4c1.64,0.35,3.15,0.53,4.56,0.53
            			c3.04,0,5.13-0.29,6.27-0.88c1.14-0.58,1.71-1.6,1.71-3.07c0-0.58-0.16-1.11-0.48-1.58c-0.32-0.47-0.88-0.92-1.66-1.36
            			c-0.79-0.44-1.85-0.88-3.2-1.31c-1.34-0.44-3.04-0.89-5.08-1.36c-3.68-0.88-6.89-1.81-9.64-2.8c-2.75-0.99-5.02-2.23-6.83-3.72
            			c-1.81-1.49-3.17-3.29-4.07-5.39c-0.91-2.1-1.36-4.7-1.36-7.8c0-2.86,0.57-5.49,1.71-7.89c1.14-2.39,2.76-4.44,4.86-6.13
            			c2.1-1.69,4.64-3.01,7.62-3.94c2.98-0.93,6.31-1.4,9.99-1.4c5.26,0,9.83,0.61,13.71,1.84c3.88,1.23,7.46,2.98,10.73,5.26
            			l-8.24,13.32c-2.75-1.87-5.49-3.3-8.24-4.29c-2.75-0.99-5.69-1.49-8.85-1.49c-2.57,0-4.26,0.35-5.08,1.05
            			c-0.82,0.7-1.23,1.61-1.23,2.72c0,0.58,0.16,1.09,0.48,1.53c0.32,0.44,0.86,0.85,1.62,1.23c0.76,0.38,1.78,0.76,3.07,1.14
            			c1.28,0.38,2.92,0.8,4.91,1.27c3.86,0.93,7.19,1.96,9.99,3.07c2.8,1.11,5.11,2.42,6.92,3.94c1.81,1.52,3.15,3.33,4.03,5.43
            			c0.88,2.1,1.31,4.58,1.31,7.45C92.97,124.65,92.34,127.66,91.08,130.17z"/>
            		<path class="summit-white" d="M152.68,126.23c-1.37,3.45-3.27,6.27-5.69,8.45c-2.42,2.19-5.29,3.78-8.59,4.78
            			c-3.3,0.99-6.88,1.49-10.73,1.49s-7.42-0.5-10.69-1.49c-3.27-0.99-6.09-2.58-8.45-4.78c-2.37-2.19-4.22-5.01-5.56-8.45
            			c-1.34-3.45-2.01-7.59-2.01-12.44V78.66h17.35v35.13c0,3.8,0.77,6.78,2.32,8.94c1.55,2.16,3.99,3.24,7.32,3.24
            			c3.33,0,5.74-1.08,7.23-3.24c1.49-2.16,2.23-5.14,2.23-8.94V78.66h17.35v35.13C154.74,118.64,154.06,122.79,152.68,126.23z"/>
            		<path class="summit-white" d="M211.22,139.99v-14.63c0-3.04,0.03-5.91,0.09-8.63c0.06-2.72,0.15-5.27,0.26-7.67
            			c-0.47,1.17-0.99,2.45-1.58,3.85c-0.58,1.4-1.2,2.82-1.84,4.25c-0.64,1.43-1.29,2.83-1.93,4.2c-0.64,1.37-1.23,2.62-1.75,3.72
            			l-8.06,17l-8.06-17c-0.53-1.11-1.11-2.35-1.75-3.72c-0.64-1.37-1.29-2.77-1.93-4.2c-0.64-1.43-1.26-2.85-1.84-4.25
            			c-0.58-1.4-1.11-2.69-1.58-3.85c0.12,2.39,0.2,4.95,0.26,7.67c0.06,2.72,0.09,5.59,0.09,8.63v14.63h-15.95V78.66h15.6l7.53,16.38
            			c0.93,1.99,1.81,3.9,2.63,5.74c0.82,1.84,1.56,3.56,2.23,5.17c0.67,1.61,1.26,3.05,1.75,4.34c0.5,1.29,0.86,2.36,1.1,3.24
            			c0.53-1.75,1.46-4.22,2.8-7.4c1.34-3.18,2.98-6.88,4.91-11.08l7.53-16.38h15.42v61.33H211.22z"/>
            		<path class="summit-white" d="M284.03,139.99v-14.63c0-3.04,0.03-5.91,0.09-8.63c0.06-2.72,0.15-5.27,0.26-7.67
            			c-0.47,1.17-0.99,2.45-1.58,3.85c-0.58,1.4-1.2,2.82-1.84,4.25c-0.64,1.43-1.28,2.83-1.93,4.2c-0.64,1.37-1.23,2.62-1.75,3.72
            			l-8.06,17l-8.06-17c-0.53-1.11-1.11-2.35-1.75-3.72c-0.64-1.37-1.29-2.77-1.93-4.2c-0.64-1.43-1.26-2.85-1.84-4.25
            			c-0.58-1.4-1.11-2.69-1.58-3.85c0.12,2.39,0.2,4.95,0.26,7.67c0.06,2.72,0.09,5.59,0.09,8.63v14.63h-15.94V78.66h15.6l7.53,16.38
            			c0.93,1.99,1.81,3.9,2.63,5.74c0.82,1.84,1.56,3.56,2.23,5.17c0.67,1.61,1.26,3.05,1.75,4.34c0.5,1.29,0.86,2.36,1.1,3.24
            			c0.52-1.75,1.46-4.22,2.8-7.4c1.34-3.18,2.98-6.88,4.91-11.08l7.54-16.38h15.42v61.33H284.03z"/>
            		<path class="summit-white" d="M311.46,139.99V78.66h17.35v61.33H311.46z"/>
            		<path class="summit-white" d="M373.05,93.46v46.52h-17V93.46h-17.17V78.66h51.34v14.81H373.05z"/>
            	</g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  </div>
  ` : ""}
</footer>`;
  }
  static get tag() {
    return "pfe-footer";
  }

  get templateUrl() {
    return "pfe-footer.html";
  }

  get styleUrl() {
    return "pfe-footer.scss";
  }

  // Used in the template
  get hasFooterLinks() {
    return this.querySelector('[pfe-footer-links]') !== null;
  }

  static get observedAttributes() {
    return ['aria-expanded'];
  }

  constructor() {
    super(PfeFooter, { delayRender: true });

    this._initialLoad = true;
    this._mqHandler = this._mqHandler.bind(this);
    this.mq = window.matchMedia('(min-width: 992px)');
    this.mq.addListener(this._mqHandler);
  }

  connectedCallback() {
    super.connectedCallback();

    let footerLinkSections = [...this.querySelectorAll('[pfe-footer-links] section')];
    footerLinkSections.forEach(section => this._makeFooterLinkSections(section));
    this._sections = footerLinkSections;

    // Render shadowDOM
    this.render();
    this._mqHandler();

    // add ARIA-labelledby to panels
    const panelULs = [...this.shadowRoot.querySelectorAll('pfe-collapse-panel > ul')];
    panelULs.forEach((panelUL, index) => this._labelPanelUL(panelUL, index));

    // generate potential ID for info panel heading
    const infoHeadingGeneratedId = `${PfeFooter.tag}_info-${generateId()}`;
    // get info panel first-child
    this.infoHeading = this.querySelector('[slot="pfe-footer-info"] > *:first-child');
    // check if first-child is a heading
    let isHeaderTag = false;
    if (this.infoHeading) {
      switch (this.infoHeading.tagName) {
        case "H1":
        case "H2":
        case "H3":
        case "H4":
        case "H5":
        case "H6":
          isHeaderTag = true;
          break;
      }
    }

    // if there's no assigned ID and the first-child is a heading
    if (this.infoHeading && !this.infoHeading.id && isHeaderTag) {
      this.infoHeading.id = infoHeadingGeneratedId;

    // if it's not a heading, give a warning
    } else if (!isHeaderTag) {
      console.warn(
        `${
          PfeFooter.tag
        }: The first child in the light DOM of [slot="pfe-footer-info"] must be a heading level tag (h1, h2, h3, h4, h5, or h6)`
      );
    }

    // add ARIA-labelledby to first UL in the info panel
    const infoUL = this.querySelector('[slot="pfe-footer-info"] > ul');
    this._labelInfoPanelUL(infoUL);
  }

  // labels panel UL with ID from heading (ARIA-labelledby)
  _labelPanelUL(panelUL, index) {
    const toggles = [...this.shadowRoot.querySelectorAll('pfe-collapse-toggle')];
    let relatedToggle = toggles[index];
    panelUL.setAttribute('aria-labelledby', relatedToggle.id);
  }

  // labels info panel UL with ID from heading (ARIA-labelledby)
  _labelInfoPanelUL(panelUL) {
    panelUL.setAttribute('aria-labelledby', this.infoHeading.id);
  }

  // used in pfe-footer.html to build link sections
  _makeFooterLinkSections(section) {
    section.buttonText = section.querySelector('h2').innerHTML;
    section.list = section.querySelector('ul').outerHTML;
  }

  _mqHandler() {
    const panels = [...this.shadowRoot.querySelectorAll('pfe-collapse-panel')];
    const toggles = [...this.shadowRoot.querySelectorAll('pfe-collapse-toggle')];

    // large screen devices
    if (this.mq.matches) {
      // prevent animation on initial load
      if (this._initialLoad) {
        panels.forEach(panel => panel.setAttribute('pfe-animation', 'false'));
      }

      // open all panels
      panels.forEach(panel => panel.expanded = true);
      toggles.forEach(toggle => {
        // set button as expanded
        toggle.expanded = true;
        // disable button
        toggle.setAttribute('disabled', 'disabled');
        toggle.setAttribute('aria-disabled', 'true'); // remove if pfe-collapse handles this in the future
      });

      // reset animation/allow animation after initial load
      if (this._initialLoad) {
        panels.forEach(panel => panel.removeAttribute('pfe-animation'));
        this._initialLoad = false;
      }

    // small screen devices
    } else {
      // close all panels
      panels.forEach(panel => panel.expanded = false);
      toggles.forEach(toggle => {
        // set button as collapsed
        toggle.expanded = false;
        // enable button
        toggle.removeAttribute('disabled');
        toggle.removeAttribute('aria-disabled'); // remove if pfe-collapse handles this in the future
      });
    }
  }
}

PFElement.create(PfeFooter);

export default PfeFooter;
//# sourceMappingURL=pfe-footer.js.map
