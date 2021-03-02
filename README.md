#### JavaScript Bootcamp:-

JavaScript is interpreted

1. Each browser has its own JavaScript engine, which either interprets the code, or uses some sort of lazy compilation
* V8: Chrome and Node.js
* SpiderMonkey: Firefox
* JavaScriptCore: Safari
* Chakra: Microsoft Edge/IE

2. They each implement the ECMAScript standard, but may differ for anything not defined by the standard.

🚩 TYPES:-

* Dynamic typing
* Primitive types (no methods)
- undefined
- null
- boolean
- number
- string
- symbol

* Objects

🚩 COERCION:-

* Explicit vs. Implicit coercion
var x = 42;
var explicit = String(x);    // explicit === "42"
var implicit = x + "";      // implicit === "42"

* == vs. ===

== coerces the types
=== requires equivalent types

* Falsy values are those if you convert them into a boolean it will be false.
- undefined
- null
- false
- +0, -0, NaN
- ""

* Truthy values are those if you convert them into a boolean it will be true
- {}
- []
- Everything else

🚩 PROTOTYPCAL INHERITANCE

* Non-primitive types have a few properties/methods
- Array.prototype.push()
- String.prototype.toUpperCase()

* Each object stores a reference to its prototype.
* Properties/methods defined most tightly to the instance have priority
* JS will automatically "box" (wrap) primitive values so you have access to methods.

__proto__ is a method that is attached to every method, object, array or an function which is automatically provided by JavaScript.

* Whenever we create an array it has its prototype(arr.__proto__) as Array.prototype and Array.prototype(arr.__proto__.__proto__) has Object.prototype as its prototype and Object.prototype(arr.__proto__.__proto__.__proto__) has its prototype as null.
                                                                                * When we create a function, JavaSctipt engine automatically creates a Prototype object for that function and add prototype property to Function object which can be used to access that Prototype object, as well as it adds constructor property which points back to the Function object.

* Then when we create instances from the Function object, then again JavaScript engine adds add getter/setter (i.e __proto__) to object’s instance which can be used to access the same prototype object of the Function object.                

* This Prototype object of the constructor function is shared among all the objects created using the constructor function. We can add methods and properties into this prototype object and then those automatically will be available to its constructor function ’s instances.

NOTE: This __proto__ usually called it as dunder proto in the JavaScript world.


###### SCOPE:-

* Variable lifetime
- Variables live from when they're declared until when their function ends

* Hoisting
- Function definitions are hoisted, but not variable initializations.

**The JavaScript Engine**

* Before executing the code, the engine reads the entire file and will throw a syntax error if one is found
  - Any function definitions will be saved in memory
  - Variable initializations will not be run, but variable names will be declare    d.
**The Global Object**

* All variables and functions are actually parameters and methods on the global object
  - Browser global object is the 'window' object
  - Node.js global object is the 'global' obejct

**Execution context**

* Equivalent to a "stack frame" in C
* Wrapper of variables and functions local to a function's execution
* Collection of execution contexts is known as the execution stack


**Lexical Environment**

* Determines how variable names are resolved, especially with nested functions
  - Child functions contain the scope of the parent function, even if the parent has returned

###### Primitives vs. Objects

* Primitives are immutable and passed by value(their value cannot be changed after they've been set)

* Objects are mutable and stored by reference 


**this**

=> Refers to an object that's set at the creation of a new execution content
=> In the global execution context, refers to global object
=> If the function is called as a method of an object, `this` is bound to the object the method is called on

👀 Setting `this` manually

* bind(), call() and apply()

- bind() will return a new function with `this` function
- call() will actually call the function with `this` bound in any arguments as well
- apply() does the same exact thing as call() but it takes 2 arguments
  1st argument:- what this should be bound to
  2nd argument:- an array of arguments

* call() and apply() will actually run the function immediately whereas bind() will just return a new function so that you can use whenever you want.


###### First Class Functions:-

* Functions are treated the same way as objects
  - can be assigned to variables, array values, object values
  - can be passed as arguments to other functions
  - can be returned from functions

* Allows for the creation of higher-ordered functions
  - either takes one or more functions as arguments or returns a function
  - map(), filter(), reduce()

🚩 Synchronous? Async? Single Threaded?

* JavaScript is a single-threaded, synchronous language
* A function that takes a long time to run will cause a page to become unresponsive
* JavaScript has functions that act asynchronously


💡 Asynchronous JavaScript

* Execution Stack
* Browser APIs (setTimeout, setInterval, fetch, axios etc.)
* Function Queue
* Event loop

*The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

*The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).

The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.

* The clearInterval() method clears a timer set with the setInterval() method.

👀 Asynchronous Functions
* setTimeout()
* XMLHttpRequest, jQuery.ajax(), fetch()
* Database calls

👀 Callbacks
* Controls flow with asynchronous calls
* Execute function once asynchronous call returns value
  - Program doesn't have to halt and wait for value

💡 Promises:-

* Alleviate "callback hell"
* Allows you to write code that assumes a value is returned within a success function
* Only needs a single error handler

💡 Closures:-

* Function that refer to variables declared by parent function
* Possible because of lexical scoping

