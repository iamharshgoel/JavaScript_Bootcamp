function outer(){
	var a = 10;
	function inner(){
		console.log(a);
	}
	return inner;
}

//Method 1
outer()();

// Method 2
var close = outer();
close();

// Code 2:-

function outest(){
	var c = 20;
	function outer(b){
		function inner(){
			console.log(a,b,c);
		}
		let a = 10;
		return inner;
	}
	return outer;
}

var close = outest()("HelloWorld");
close();

/*
 In closures it will find the nearest reference to the variable. If it doesn't find **a** in the outer function scope then it will find the reference to **a**in the outest function scope if it doesn't find **a** there then it will find **a** in the global scope, if it doesn't find there then it will give you reference error.
*/

/*
Advantages:-

1. Module Pattern
2. Function currying
3. It helps in Data hiding and encapsulation
4. Memoization

Whenever a function is run it creates a new independent copy itself

*/

// this is the best practice to make different functions in the same function us// ing this constructor functions.

function counter(){
	var count = 0;
	this.incrementCounter = function(){
		count++;
		console.log(count);
	}

	this.decrementCounter = function(){
		count--;
		console.log(count);
	}
}

// new keyword is used for making constructor functions
var counter1 = new counter();

counter1.incrementCounter();

/*
Disadvantages:-

1. Overconsumption of memory as everytime new closure is made it consumes memory and it is not linked with garbage collector therefore it will create overconsumption

* Garbage collector is a program in browser or the JavaScript engine which kind of freeze the unutilised memory 
*/
