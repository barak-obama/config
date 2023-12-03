if (window.location.hostname === "m.facebook.com") {

    const reels_observer = new MutationObserver((mutations, obs) => {
        const reelsButton = document.querySelector(reelsButtonSelector);

        
        if (window.location.pathname.includes("/reel")) {
                console.log("in reels")
                window.location.pathname = "/";
        }

        
    });

    reels_observer.observe(document, {
        childList: true,
        subtree: true
    });



}
