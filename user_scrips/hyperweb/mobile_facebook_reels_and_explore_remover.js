if (window.location.hostname === "m.facebook.com") {
    console.log("in reels")
    if (window.location.pathname.includes("/reel")) {
                window.location.pathname = "/";
    }

    const reels_observer = new MutationObserver((mutations, obs) => {
        const reelsButton = document.querySelector(reelsButtonSelector);

        if (window.location.pathname.includes("/reel")) {
                window.location.pathname = "/";
        }

        
    });

    reels_observer.observe(document, {
        childList: true,
        subtree: true
    });



}
