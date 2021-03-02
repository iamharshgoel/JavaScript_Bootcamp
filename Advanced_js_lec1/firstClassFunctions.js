// map function
var x = [0,1,2,3]

function addOne(x) {
	return x+1;
}

console.log(x.map(addOne));

// filter function

console.log(x.filter(function(x) { return (x%2)==0 } ));


// reduce function

function accumulate(prevTotal, newTotal) { return prevTotal + newTotal ; }

console.log(x.reduce(accumulate ,0));


