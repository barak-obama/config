if (window.location.hostname === "www.instagram.com") {
    const exploreButtonSelector = 'a[href="/explore/"]';
    const exploreFeedSelector = 'section > main div[style*="flex-direction: column"]';
    const loadingWheelSelector = 'div[data-visualcompletion="loading-state"]'

    const explore_observer = new MutationObserver((mutations, obs) => {
        const exploreButton = document.querySelector(exploreButtonSelector);

        if(exploreButton){
            exploreButton.remove()
        }

        if (window.location.pathname !== "/explore/") {
            return;
        }



        const exploreFeed = document.querySelector(exploreFeedSelector);

        if (exploreFeed) {
            exploreFeed.remove();
        }
        const loadingWheelButton = document.querySelector(loadingWheelSelector);
        if (loadingWheelButton) {
            loadingWheelButton.remove();
        }
    });

    explore_observer.observe(document, {
        childList: true,
        subtree: true
    });


    const reelsButtonSelector = 'a[href="/reels/"]';
    const reelsFeedSelector = 'section > main div';
    // const loadingWheelSelector = 'div[data-visualcompletion="loading-state"]'

    const reels_observer = new MutationObserver((mutations, obs) => {
        const reelsButton = document.querySelector(reelsButtonSelector);
        
        if(reelsButton){
            reelsButton.remove()
        }

        if (!window.location.pathname.contains("/reels/")) {
 
            return;
        }

        const reelsFeed = document.querySelector(reelsFeedSelector);

        if (reelsFeed) {
            reelsFeed.remove();
        }
    });

    reels_observer.observe(document, {
        childList: true,
        subtree: true
    });
}