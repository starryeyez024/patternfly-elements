# PFElements Call-to-action Element

## Test cases

Because the call-to-action component is very important, and it has several types, states, and themes that can be compounded, the test cases are documented here so that the expectations are clear.

Each of the test cases below should work in the last two versions of evergreen browsers and all functionality should work in IE11.

### No theme

* **Default**
    * When I use a `<pfe-cta>` tag without a priority attribute
        * I expect the link to be bold and blue, with an arrow on the right side
    * When I click on the link (active state)
        * I expect the link to have a light blue background around the link and arrow, with padding above and below
    * When I hover on the link using a mouse cursor (hover state)
        * I expect the arrow to move slightly to the right, and the link and arrow color should change to dark blue
    * When I focus on the link using the tab key (focus state)
        * I expect the link to have a light blue background around the link and arrow, with padding above and below
* **Primary**
    * When I add the attribute of `pfe-priority="primary"` to a `<pfe-cta>`
       * I expect the link to have padding and a background color 
    * When I click on the edge of the button (not the text)
        * I expect to be taken to the URL of the href in the link tag
    * When I click on the link (active state)
        * I expect the link to look the same as it does when it's inactive
    * When I hover on the link using a mouse cursor (hover state)
        * I expect the background color to become slightly darker
    * When I focus on the link using the tab key (focus state)
        * I expect a thin outline to appear on the inside edge 
* **Secondary**
    * When I add the attribute of `pfe-priority="secondary"` to a `<pfe-cta>`
       * I expect the link to have padding and a border color, with a transparent background
    * When I click on the edge of the button (not the text)
        * I expect to be taken to the URL of the href in the link tag
    * When I click on the link (active state)
        * I expect the link to look the same as it does when it's inactive
    * When I hover on the link using a mouse cursor (hover state)
        * I expect a dark background color, and the text color to be white
    * When I focus on the link using the tab key (focus state)
        * I expect a thin outline to appear on the inside edge 
* **Disabled**
    * When I add the attribute of `aria-disabled="true"` to a `<pfe-cta>`
       * I expect the CTA to have padding and gray background color with gray text
    * When I click on the edge of the button (not the text)
        * I expect to be taken to the URL of the href in the link tag
    * When I click on the link (active state)
        * I expect the cta to look the same and I should not be taken to a URL.
    * When I hover on the link using a mouse cursor (hover state)
        * I expect the cta to look the same 
    * When I focus on the link using the tab key (focus state)
        * I expect the cta to look the same  

### Dark theme

* **Default**
    * When I use a `<pfe-cta>` tag without a priority attribute
        * I expect ...
    * When I click on the link (active state)
        * I expect ...
    * When I hover on the link using a mouse cursor (hover state)
        * I expect ...
    * When I focus on the link using the tab key (focus state)
        * I expect ...
* **Primary**
    * When I add the attribute of `pfe-priority="primary"` to a `<pfe-cta>`
       * I expect ...
    * When I click on the edge of the button (not the text)
        * I expect ...
    * When I click on the link (active state)
        * I expect ...
    * When I hover on the link using a mouse cursor (hover state)
        * I expect ...
    * When I focus on the link using the tab key (focus state)
        * I expect ...
* **Secondary**
    * When I add the attribute of `pfe-priority="secondary"` to a `<pfe-cta>`
       * I expect ...
    * When I click on the edge of the button (not the text)
        * I expect ...
    * When I click on the link (active state)
        * I expect ...
    * When I hover on the link using a mouse cursor (hover state)
        * I expect ...
    * When I focus on the link using the tab key (focus state)
        * I expect ...
* **Disabled**
    * When I add the attribute of `aria-disabled="true"` to a `<pfe-cta>`
       * I expect ...
    * When I click on the edge of the button (not the text)
        * I expect ...
    * When I click on the link (active state)
        * I expect ...
    * When I hover on the link using a mouse cursor (hover state)
        * I expect ...
    * When I focus on the link using the tab key (focus state)
        * I expect ...

### Saturated theme

* **Default**
    * When I use a `<pfe-cta>` tag without a priority attribute
        * I expect ...
    * When I click on the link (active state)
        * I expect ...
    * When I hover on the link using a mouse cursor (hover state)
        * I expect ...
    * When I focus on the link using the tab key (focus state)
        * I expect ...
* **Primary**
    * When I add the attribute of `pfe-priority="primary"` to a `<pfe-cta>`
       * I expect ...
    * When I click on the edge of the button (not the text)
        * I expect ...
    * When I click on the link (active state)
        * I expect ...
    * When I hover on the link using a mouse cursor (hover state)
        * I expect ...
    * When I focus on the link using the tab key (focus state)
        * I expect ...
* **Secondary**
    * When I add the attribute of `pfe-priority="secondary"` to a `<pfe-cta>`
       * I expect ...
    * When I click on the edge of the button (not the text)
        * I expect ...
    * When I click on the link (active state)
        * I expect ...
    * When I hover on the link using a mouse cursor (hover state)
        * I expect ...
    * When I focus on the link using the tab key (focus state)
        * I expect ...
* **Disabled**
    * When I add the attribute of `aria-disabled="true"` to a `<pfe-cta>`
       * I expect ...
    * When I click on the edge of the button (not the text)
        * I expect ...
    * When I click on the link (active state)
        * I expect ...
    * When I hover on the link using a mouse cursor (hover state)
        * I expect ...
    * When I focus on the link using the tab key (focus state)
        * I expect ...
