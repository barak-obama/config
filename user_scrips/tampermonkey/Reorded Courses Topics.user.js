// ==UserScript==
// @name         Reorded Courses Topics
// @namespace    http://tampermonkey.net/
// @version      0
// @description  try to take over the world!
// @author       You
// @match        https://moodle2.cs.huji.ac.il/nu22/course/view.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ac.il
// @grant        none
// ==/UserScript==


(function() {
    let topics = document.getElementsByClassName("topics")[0];
    var i = topics.childNodes.length;
    while (i--){
        topics.appendChild(topics.childNodes[i]);
    }
})();