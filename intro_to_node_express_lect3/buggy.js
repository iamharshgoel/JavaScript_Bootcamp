function returnPerson() {
	return {
		firstName: 'Harsh',
		lastName: 'Goel'
	}
}

function greet() {
	var person = returnPerson();
	console.log('Hello, ' + person.firstName);
}

greet();


