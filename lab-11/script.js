// console.log("-----Homework------")

let student ={
  fName : "D",
  lName : "D",
  grade :[],
  inputNewGrad : function(newGread){
       this.grade.push(newGread);
  },
  computeAvgGread: function(){
    let sum = 0;
    for(let i of this.grade){
      sum +=i;
    }
    return parseInt(sum/this.grade.length);
  }
}
let s1 = Object.create(student);
s1.fName = "Bitu";
s1.lName = "Kassa";
s1.grade = [50,66,80];

let s2 = Object.create(student);
s2.fName = "Dom";
s2.lName = "Alex";
s2.grade= [90,40,60];

let s3 = Object.create(student);
s3.fName = "Maya";
s3.lName = "Tigest";
s3.grade= [80,40,60];

let arr = [s1,s2,s3];

let avg = arr.map(item => item.computeAvgGread())

 console.log(avg)

 

console.log("-----With Constructor------")

function Student(fName, lName, grade) {
  this.fName = fName;
  this.lName = lName;
  this.grade = grade;
}
Student.prototype.inputNewGrade = function (newGread) {
  this.grade.push(newGread)
}
Student.prototype.computeAvgGread =
  function () {
    let sum = 0;
    for (let i of this.grade) {
      sum += i;
    }
    return parseInt(sum / this.grade.length);
  }
Student.prototype.sort = function(){
  let sorted = this.grade.sort((a,b) => a-b);
  return sorted;
}

let stu1 = new Student("Jhon", "Smoth", [50, 66, 80])
let stu2 = new Student("Jack", "Brown", [90,40,60])
let stu3 = new Student("Bitu", "Bisrat", [80,40,60])

let arr = [stu1, stu2, stu3];

let avg = arr.map(item => item.computeAvgGread())

console.log(avg)
console.log(stu3.sort())