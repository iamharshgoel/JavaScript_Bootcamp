// simulate fetching data from a db
function getUsersFromDatabase(callback){
	setTimeout(() => callback({firstName:'Harsh', lastName:'Goel' }), 1000);
}

//query db for user, then greet the user
function greetUser(){
	getUsersFromDatabase(function(userObject) {
		console.log('Hi, ' + userObject.firstName); 
	});
}

greetUser();
