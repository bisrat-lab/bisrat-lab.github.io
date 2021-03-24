let a =[];

a.push({name:"b", age:6})
a.push({name:"D", age:6})
let sum=0;
for(let i of a){
sum+=i.age
}
//console.log(sum)

let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  console.log(( clone.name )); // still John in the original object

  let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  alert( user.sizes === clone.sizes ); // true, same object
  
  // user and clone share sizes
  user.sizes.width++;       // change a property from one place
  alert(clone.sizes.width); // 51, see the result from the other one

