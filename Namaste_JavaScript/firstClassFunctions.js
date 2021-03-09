// Function Statement and Function Declaration 

When we make a function and give it a name 

function a(){
	console.log("a called");
}

// Function Expression
Function acts like a value

var b = function() {

}

* The major difference between Function statement and Function expression is Hoisting

// Anonymous functions
Function without a name is known as anonymous function
Anonymous functions does not have their own identity
Anonymous functions are used at place where functions are used as values

function () {

}

// Named Function Expression

var b = function xyz() {
	console.log("");
}

b();
xyz();  // It will give you  a reference error that xyz is not defined
This function xyz is having local scope 


// Difference between Parameters and Arguments ?

var b = function(param1, param2){

}

b(1, 2);

Here param1 and param2 are parameters and they are local variables 
1 and 2 are arguments of a function

The values which we pass inside a function are known as arguments and these label and identifier which gets those values are known as parameters

// First Class Functions

The ability to use functions as values and can be pass this in an argument to another functions and can be returned from the functions is this ability is known as first class functions

* Ability to be used like values makes the function as first class citizens in javascript


// Arrow functions


