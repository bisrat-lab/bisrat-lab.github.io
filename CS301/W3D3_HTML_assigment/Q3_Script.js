"use strict";

/**
 * 
 */
function add(){

    let userInput = document.getElementById("input").value;
    let old = document.getElementById("text_area").value;
    document.getElementById("text_area").innerHTML = userInput + " " + old;
    
    document.getElementById("input").value = "";
}