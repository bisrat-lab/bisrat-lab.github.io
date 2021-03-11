"use strict";

function add(){
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;
    let result = parseInt(num1)  + parseInt(num2);
    document.getElementById("output").innerHTML = result;

    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
}

function minus(){
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;
    let result = parseInt(num1)  - parseInt(num2);
    document.getElementById("output").innerHTML = result;

    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
}

function mult(){
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;
    let result = num1  * num2;
    document.getElementById("output").innerHTML = result;

    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
}