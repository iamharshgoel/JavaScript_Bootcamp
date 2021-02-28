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

 
