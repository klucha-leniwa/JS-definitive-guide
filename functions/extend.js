//Define an extend function that copies the properties of its second
//and subsequent arguments onto its first argument
//We work around an IE bug here: in many versions of IE, the for/in loop
//won't enumerate an enumerable property of o if the prototype of o has
//a nonenu,erable property by the same name. This means that properties
//like toString are not handled correctly unless we explicitly check for them.
var extend = (function() { //Assign the return value of this function
	//First check for the presence of the bug before patching it
	for (var p in {toString: null}) {
		//If we get here, then the for/in loop works correctly and we return
		//a simple version of extend() function
		return function extend(o) {
			for (var i =1; i<arguments.length; i++) {
				var source = arguments[i];
				for (var prop in source) {
					o[prop] = source[prop];
				}
			}
			return o;
		}
		//If we got here, it means that for/in loop did not enumerate
		//the toString property of the test object. So return a version
		//of the extend() function that explicitly tests for nonenumerable
		//properties of Object.prototype

		//This is the list of special-case properties we check for

		var protoprops = ['toString', 'valueOf', 'constructor', 'hasOwnProperty',
			'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString'];
		return function patched_extend(o) {
			for (var i = 0; i<arguments.length; i++) {
				var source = arguments[i];
				for (var prop in source) {
					o[prop] = source[prop];
				}
				//And now check the special-case properties
				for(var j=0; j<protoprops.length; j++) {
					prop = protoprops[j];
					if (source.hasOwnProperty(prop)) {
						o[prop] = source[prop]
					}
				}
			}
			return o;
		}
	}
},());