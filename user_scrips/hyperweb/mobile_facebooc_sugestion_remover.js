function get_text(el){
    let child = el.firstChild,
    texts = [];

    while (child) {
        if (child.nodeType == 3) {
            texts.push(child.data);
        }
        child = child.nextSibling;
    }

    return texts.join("");


}

if (window.location.hostname === "www.m.facebook.com") {

    const reelsButtonSelector = 'a[href="/reels/"]';
    const reelsFeedSelector = 'section > main div';
    // const loadingWheelSelector = 'div[data-visualcompletion="loading-state"]'

    const observer = new MutationObserver((mutations, obs) => {

        Array.from(document.querySelectorAll("span")).filter(s => {
            let text = get_text(s);
            return text.includes("Suggested for you") || text == "Follow";
        }).forEach(s => {
            s.className = "to_remove"
        });

        let divs1 = Array.from(document.querySelectorAll("div.x1lliihq:has(.to_remove)"));
        let divs2 = Array.from(document.querySelectorAll("div[data-tracking-duration-id]:has(.to_remove)"));
        let divs = divs1.concat(divs2);

        if(divs.length > 0){
            console.log("Deleted " + divs.length + " divs");
        }
        
        divs.forEach(d => {
            d.previousSibling.remove(); d.remove();
        });


    });

    observer.observe(document, {
        childList: true,
        subtree: true
    });


}