class Clock {
    constructor({template}){
        this.template = template;
    }
    render(){
        let date = new Date();
        let hours = date.getHours();
        if(hours < 10 ) hours = '0' + hours;

        let mins = date.getMinutes();
        if(mins <10 ) mins = '0' + mins;

        let sec = date.getSeconds();
        if(sec <10) sec= '0' + sec;

        let output = this.template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s',sec);

        console.log(output);
    }
    stop(){
        clearInterval(this.timer);
    }
    start(){
        this.render();
        this.timer = setInterval(()=> this.render(),1000);
    }
}

// • Question 2:
// • Create an object student using class syntax which has
// • Properties: firstName:String, lastName:String, grades: Array
// • Methods:
// • inputNewGrade(newGrade): push newGrade to grades
// • computeAverageGrade(): return average of grades
// • Create an Array with multiple students
// • Then compute the average grade for all students in the array

class Student {
constructor(firstName, lastName, grades = []) {
this.firstName = firstName;
this.lastName = lastName;
this.grades = grades;
}
inputNewGrade(newGrade) {
this.grades.push(newGrade);
}
computeAverageGrade() {
return this.grades.reduce((sum, current, index, array) => sum + current /
array.length, 0);
}
}
const stu1 = new Student('John', 'Smith');
stu1.inputNewGrade(88);
stu1.inputNewGrade(98);
stu1.inputNewGrade(86);
stu1.inputNewGrade(80);
const stu2 = new Student('John2', 'Smith2');
stu2.inputNewGrade(85);
stu2.inputNewGrade(95);
stu2.inputNewGrade(85);
stu2.inputNewGrade(70);
const students = [stu1, stu2];
const result = students.reduce((average, stu, index, array) => average + stu.comp
uteAverageGrade() / array.length, 0);
console.log(result);
