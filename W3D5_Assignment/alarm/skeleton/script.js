function okclick(){
    // let btn = document.getElementById("go")
    let sec = document.getElementById("sec").value; 
    let count = 0;
    for(let i = sec; 0 < sec; i--){
        count = count - i;
        document.getElementById("sec").innerHTML = count;
    }
    
}
