var data = [1,2,3,4,5,6,7,89,7];
function applyUsage() {
	//Apply method on object passed as first argument. If null is passed then global
	//object is used. As second argument array of arguments is passed
	return Math.max.apply(null, data);
}

function callUsage() {
	return Math.max.call(null, 1,4,6,7,32);
}

function callee() {
	return arguments.callee
}