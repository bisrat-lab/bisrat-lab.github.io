// /* eslint-disable require-jsdoc */
// /* eslint-disable no-unused-vars */
"use strict";

//See tests.js for behavior

//let user = {a:5, z:6, m:8}
function nameString(obj) {
  if(obj === undefined){
    return "no object passed"
}
let arr =[];
   for(let k in obj){      
       arr.push(k)
     }
    arr.sort();

    if(obj == null){
        return 'null argument'
      }
      if(obj.length == 0){
              return "object has no properties"
          }
    let str = arr.join('.')
      return str
    } 
    

     

