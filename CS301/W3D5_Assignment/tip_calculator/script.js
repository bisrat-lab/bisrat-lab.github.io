function calcTip(){
    let total = document.getElementById("subtotal").value;
    let tip = document.getElementById("tip").value
    let result  = total * tip/100;
    document.getElementById("total").innerHTML = result;
 }