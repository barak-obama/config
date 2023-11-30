// ==UserScript==
// @name         Hide Moodle Courses
// @namespace    http://tampermonkey.net/
// @version      0
// @description  try to take over the world!
// @author       You
// @match        https://moodle2.cs.huji.ac.il/nu22/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ac.il
// @grant        none
// ==/UserScript==

let title_list = ["74500","80430-1", "80661", "80618", "80928"];


(function() {
    'use strict';
    title_list.forEach(title => {
        let li_cont = document.querySelector("[title*='" + title + "']");
        if(li_cont != null){
            li_cont.parentElement.parentElement.style = "display:none";
        }
        

    })

    let login_button = document.querySelector("#login");
    if(login_button != null){
        login_button.submit()
    }
})();