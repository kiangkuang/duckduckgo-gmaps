// ==UserScript==
// @name         DuckDuckGo Use Google Maps Search
// @namespace    https://github.com/kiangkuang
// @version      0.0.1
// @author       Kiang Kuang
// @description  Automatically redirects map searches from DuckDuckGo to Google Maps.
// @icon         https://www.google.com/s2/favicons?sz=64&domain=duckduckgo.com
// @match        https://duckduckgo.com/*
// ==/UserScript==

(function () {
  'use strict';

  let oldHref = "";
  const observer = new MutationObserver(() => {
    if (oldHref === window.location.href)
      return;
    oldHref = window.location.href;
    const params = new URLSearchParams(window.location.search);
    if (params.get("iaxm") === "maps") {
      window.location.replace(
        `https://www.google.com/maps/search/?api=1&query=${params.get("q")}`
      );
    }
  });
  observer.observe(window.document.body, { childList: true, subtree: true });

})();