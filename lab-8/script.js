//Q1
function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  printNumbers(5, 10);


//Q2
let i = 0;
setTimeout(() => console.log(i), 100); 
for(let j = 0; j < 100000000; j++) {
  i++;
}