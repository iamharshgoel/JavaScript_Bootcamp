// It uses reference of variable i
function x(){
    for (let i=1; i<=5; i++){
        setTimeout(function () {
        console.log(i);
        }, i * 1000);
    }

    console.log("Namaste JavaScript");
}

x();

// It will run loop everytime for variable i
function x(){
    for (let i=1; i<=5; i++){
	function close(x){
        setTimeout(function () {
        console.log(x);
        }, x * 1000);
    }	
	close(i);
}

    console.log("Namaste JavaScript");
}
x();


