// let a =[];

// a.push({name:"b", age:6})
// a.push({name:"D", age:6})
// let sum=0;
// for(let i of a){
// sum+=i.age
// }
// //console.log(sum)

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let clone = {}; // the new empty object
  
//   // let's copy all user properties into it
//   for (let key in user) {
//     clone[key] = user[key];
//   }
  
//   // now clone is a fully independent object with the same content
//   clone.name = "Pete"; // changed the data in it
  
//   console.log(( clone.name )); // still John in the original object

//   let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = Object.assign({}, user);
  
//   alert( user.sizes === clone.sizes ); // true, same object
  
//   // user and clone share sizes
//   user.sizes.width++;       // change a property from one place
//   alert(clone.sizes.width); // 51, see the result from the other one



  // let user = { name: "John" };
  // let admin = { name: "Admin" };
  
  // function sayHi() {
  //   alert( this.name );
  // }
  
  // // use the same function in two objects
  // user.f = sayHi;
  // admin.f = sayHi;
  
  // // these calls have different this
  // // "this" inside the function is the object "before the dot"
  // user.f(); // John  (this == user)
  // admin.f(); // Admin  (this == admin)
  
  // admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

  // let user = {
  //   firstName: "Ilya",
  //   sayHi() {
  //     let arrow = () => console.log((user.firstName));
  //     arrow();
  //   }
  // };
  
  // user.sayHi(); // Ilya
 
  

