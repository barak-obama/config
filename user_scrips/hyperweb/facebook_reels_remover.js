if (window.location.hostname === "www.facebook.com") {

    const reels_observer = new MutationObserver((mutations, obs) => {

        
        if (window.location.pathname.includes("/reel")) {
                window.location.replace("https://ohbarak.com")
        }

        
    });

    reels_observer.observe(document, {
        childList: true,
        subtree: true
    });
    
}
