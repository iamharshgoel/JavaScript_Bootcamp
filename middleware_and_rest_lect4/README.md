###### MIDDLEWARE AND REST:-

🚩 Express Middleware:-

* An Express app is a chain of middlwware functions
* Middleware functions have access to the request object, response object and the next middleware function
* Can listen at a specified path, or globally
* Can modify the request or response objects
* Can pass control to the next middleware by invoking callback
* Can complete a response
 - WARNING: If you never send a response, the request will hang

💡 Types of Middleware:-

* Built-in
* Third-Party (NPM packages)
* Application-level/Router-level
* Error-handling

* app.use() mounts middleware at global path

**Status Codes**

* 200 => Sucess
* 400 => Invalid requests
* 403 => Unauthorized
* 404 => Not Found
* 405 => Method not allowed
* 500 => Internal Server Error

🚩 RESTful Services

* REpresentational State Transfer
* Architectural design pattern for api's
* Stateless ( It means that the server doesn't keep track of what's happening with each individual user)
* Simple and Scalable 
* Server transfers state (i.e. by returning an object) based on a client's request for an identifier (endpoint) and an operation (HTTP method)

🚩 REST Constraints

* Stateless 
* Descriptive Messages 
* Consistent resource identifiers (structure of url)
* Client-Server
* Cacheable

1. Stateless :- 
=> User context not stored on server
=> Each request contains enough information on the server to create a request

2. Descriptive Messages:-
=> Request and response contain enough information for the Client or Server to understand

3. Consistent resource identifiers:-
=> Resources on server are consistently organized
=> Pair endpoint with HTTP method (get, post, put, delete)

4. CLient-Server:-
=> Client runs an application and doesn't share resources with server
=> Client requests information from a server
=> Server await incoming requests and responds accordingly

5. Cacheable:-
=> Responses have some sort of version identifier
=> Prevents clients from re-requesting the same data, or using expired data


 

