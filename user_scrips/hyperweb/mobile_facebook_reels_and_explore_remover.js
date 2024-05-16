if (window.location.hostname === "www.facebook.com") {

    const reels_observer = new MutationObserver((mutations, obs) => {

        
        if (window.location.pathname.includes("/reel")) {
                window.location.pathname = "/";
        }

        
    });

    reels_observer.observe(document, {
        childList: true,
        subtree: true
    });
    
}
