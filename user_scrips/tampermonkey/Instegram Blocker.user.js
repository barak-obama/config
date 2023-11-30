// ==UserScript==
// @name         Instegram Blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.instagram.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const reelsButtonSelector = 'a[href="/reels/"]';
    const reelsFeedSelector = 'section > main div';
    // const loadingWheelSelector = 'div[data-visualcompletion="loading-state"]'

    const reels_observer = new MutationObserver((mutations, obs) => {

        const reelsButton = document.querySelector(reelsButtonSelector);
        if(reelsButton){
            reelsButton.remove()
        }

        if (window.location.pathname.contains("/reels")) {
            window.location.pathname = "/";
             const reelsFeed = document.querySelector(reelsFeedSelector);

             if (reelsFeed) {
                 reelsFeed.remove();
             }
        }

    });

    reels_observer.observe(document, {
        childList: true,
        subtree: true
    });



    const exploreButtonSelector = 'a[href="/explore/"]';
    const exploreFeedSelector = 'section > main div[style*="flex-direction: column"]';
    const loadingWheelSelector = 'div[data-visualcompletion="loading-state"]';

    const explore_observer = new MutationObserver((mutations, obs) => {
        const exploreButton = document.querySelector(exploreButtonSelector);
        if(exploreButton){
            exploreButton.remove()
        }

        if (window.location.pathname.contains("/explore")) {
            const exploreFeed = document.querySelector(exploreFeedSelector);

            if (exploreFeed) {
                exploreFeed.remove();
            }
            const loadingWheelButton = document.querySelector(loadingWheelSelector);
            if (loadingWheelButton) {
                loadingWheelButton.remove();
            }
        }
    });

    explore_observer.observe(document, {
        childList: true,
        subtree: true
    });




})();