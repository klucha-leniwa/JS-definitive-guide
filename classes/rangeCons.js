//This is a constructor function that initializes new Range object
//Note that it does not create or return the object. It just initializes this.
function Range(from, to) {
    this.from = from;
    this.to = to;
}

//All range objects inherit from this object.
//Note that the property name must be 'prototype' for this to work.
Range.prototype = {
    //Return true if x is in the range, false otherwise
    //This method works for textual amd Date ranges as well as numeric
    includes: function(x) {
        return Math.ceil(this.from) <= x && x <= this.to;
    },
    //Invoke f once for each integer in the range
    //This method works only for numeric values
    foreach: function(f) {
        for(var x = this.from; x<= this.to; x++) f(x);
    },
    //Return a string representation of the range
    toSting: function() {
        return "(" + this.from + "..." + this.to + ")";
    }
};