var o = new Object();
o.firstName = 'Harsh';
o.lastName = 'Goel';
o.age = 20;
o.greet = function() { console.log('Hello'); };

console.log(JSON.stringify(o));
o.greet();


var o2 = {}
o2['firstName'] = 'Harsh';
var a = 'lastName';
o2[a] = 'Goel';


var o3 = {
	firstName: 'Harsh',
	lastName: 'Goel',
	age: 20,
 	greet: function() {
		console.log('hi');
	},
	address: {
		street: "Main st.",
		number: '138/22'
	}
};
