// Callback Function in JavaScript

When you pass function inside another function, then that passed function is known as callback function.
(Any function that is passed as an argument is called a callback function.)

* JavaScipt is a Synchronous and single-threaded language


setTimeout(function () {
	console.log("timer");
}, 5000);

function x(y){
	console.log("x");
	y();
}
x(function y() {
	console.log("y");
});

20

The event listeners need to be removed due to following reason.

Avoid memory leaks, if the browser is not handled it properly.Modern browsers will garbage collect event handlers of removed DOM elements but it is not true in cases of legacy browses like IE which will create memory leaks.


