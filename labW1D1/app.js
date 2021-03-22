/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function pow(x, n) {
	let result=1;
	for(let i=0; i<n;i++){
		result*=x;
	}
	return result;
}



function add2(n1, n2) {
	return n1 + n2;
}

function add(...args) {
	let count = arguments.length;
	let sum = 0;
	for (let i=0; i<count; i++) {
		sum += arguments[i];		
	}
	
	return sum;
}

/*
	Input: grades is an array of integers
	Output: compute average of grades and report letter grade as follows:
	90 - 100 A
	80 - 89  B
	70 - 79  C
	60 - 69  D
	0 - 59   NC
*/
function computeGrade(grades) {
	let answer = '';
	if(grades[0] == 90){
		answer = 'A';
	}else if(grades[0]==80){
		answer = 'B';
	}else if(grades[0]==70){
		answer = 'C';
	}else if(grades[0]==60){
		answer = 'D';
	}else if(grades[0]==59){
		answer = 'NC';
	}
	
	return answer;
}

