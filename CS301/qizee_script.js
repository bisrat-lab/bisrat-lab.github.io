function sumAvg(){
   let input = document.getElementById("txtInput").value;
   let num = [];
   let sum = 0;
   num = input.split(',')
   for(let i = 0; i< num.length; i++){
           sum = sum  + parseInt(num[i]);
            
           
   }
   document.getElementById("sum").innerHTML = sum;
   document.getElementById("avg").innerHTML = sum/num.length;
   //document.getElementById("input").value = "";
}

// let input = "10,20,30"
// let num = [];
//    let sum = 0;
//    let count = 0;
//    num = input.split(',')
//    for(let i = 0; i< num.length; i++){
//            sum = sum  + parseInt(num[i]);
//             count++;
//    }
//    console.log(sum)
