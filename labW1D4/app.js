/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
	if(string == undefined){
		return "missing argument"
	}
	if(typeof(string) !== "string"){
		return "argument not string"
	}
	let newStr = '';
	for(let i=0; i< string.length; i++){
		if(i % 2 !== 0 ){
			newStr += string[i]
		}
	}
	return newStr;
}
// console.log(removeEvenCharacters("abcd"))

// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
	let sumOfPostives = array.filter(v => v > 0);
    let sum= 0;
	for(let i of sumOfPostives){
		sum+=i
	}
	return sum
}
//console.log(sumPositiveNumbers([-1,4,5,-2,-3,10]))

// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
	function numberFilter(item) {
		return typeof item == "number";
	}
	function stringFilter(item) {
		return typeof item == "string";
	}
	this.numbers = array.filter(numberFilter);
	this.strings = array.filter(stringFilter);
}

// Makes all negative numbers of the input array positive
function makePositive(array) {
	let newArr = [];
	for(let i=0; i< array.length; i++){
		if(array[i] < 0){	
			newArr.push(Math.abs(array[i]))
		}else{
			newArr.push(array[i])
		}
	}
	return newArr
}
//console.log(makePositive([-1, 2, "a", 3, -4, -5]))

// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {
	let newArr2 =[];
	
	for(let i=0; i<array.length; i++){
		if(array[i] === 0){
			array[i]="*";
			newArr2.push(array[i])
			
		 }
		else{
		 	newArr2.push(array[i])
		 }
	}
	return newArr2;
}
console.log(removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]))


