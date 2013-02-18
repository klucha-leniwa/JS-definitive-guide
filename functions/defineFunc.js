'use strict';
//Print the name and value of each property of o. Return undefined
function printprops(o) {
	for (var p in o) {
		console.log(p + ': ' + o[p] + '\n');
	}
}

//Compute the distance between Cartesian points (x1,y1) and (x2,y2)
function distance(x1, y1, x2, y2) {
	var dx = x2-x1;
	var dy = y2-y1;
	return Math.sqrt(dx*dx + dy*dy);
}

//A recursive function (one that calls itself) that computes factorial
//Recall that x! is the product of x and all positive integers less then it
function factorial(x) {
	if (x<=1) {
		return 1;
	} else {
		return factorial(x-1)*x;
	}
}

//This function expression defines a function that squares its arguments.
//Note that we assign it to variable
var square = function(x){return x*x};

//Function expression can include names, which is useful for recursion
var f = function fact(x) {
	if (x<=1) {
		return 1;
	} else {
		return fact(x-1)*x;
	}
}

//Function expressions can also be used as arguments to other functions
data.sort(function(a,b){return a-b;})

//Function expressions are sometimes defined and imidiately invoked
var tensquare = (function(x){return x*x},(10));