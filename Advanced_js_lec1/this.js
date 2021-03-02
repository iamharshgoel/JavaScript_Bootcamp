function whatIsThis(){
	console.log(this);
}

var person = {
	firstName: 'Harsh',
	lastName: 'Goel',
	whatIsThis: function(){ console.log(this); },
	greet: function(){ console.log('Hi' + this.firstName)}
}

person.greet();

var student = {
	firstName: 'Arjun',
	lastName: 'Goel'
};

student.greet = person.greet;

//student.greet();

var studentGreet = person.greet.bind(student);
//studentGreet();

person.greet.call(student);

var newPerson = {
	firstName: 'Aman',
	lastName: 'Goel',
	greet: ()=> console.log('hi, '+ this.firstName)
};

newPerson.greet();

//lexical scoping

var x = 42;

function setX(){
	var x = 50;
}

setX();

function printX(){
	console.log(x);
}
printX();

