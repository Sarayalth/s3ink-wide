// ==UserScript==
// @name         s3ink-wide
// @namespace    https://github.com/Sarayalth/s3ink-wide
// @version      0.1
// @description  brr brr
// @author       sarah
// @match        https://splatoon3.ink/
// @downloadURL https://raw.githubusercontent.com/Sarayalth/s3ink-wide/main/s3ink-wide.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=splatoon3.ink
// @grant        none
// @license     MIT
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        console.log("brrrrrr");
        var thingie1 = document.querySelector("#app > main > div.grow.flex.items-center.justify-center > div");
        thingie1.classList.remove("max-w-screen-2xl");
        var thingie2 = thingie1.children[0];
        var thingie3 = thingie1.children[1];
        var thingie4 = thingie2.appendChild(thingie3.children[0]);
        thingie3.remove();
        thingie4.classList.remove("md:-rotate-1");
        thingie4.classList.remove("md:max-w-lg");
        thingie4.classList.add("md:rotate-1");
    }, false);
})();
