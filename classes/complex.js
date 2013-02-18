/*
 * Complex.js:
 * This file defines a Complex class to represent complex number
 * Recall that a complex number is the sum fo real number and an
 * imaginary number that the imaginary number i is the square root of -1
 */

/*
 * This constructor function defines the instance fields r and i on every
 * instance it creates. These fields hold the real and imaginary parts
 * of the complex number: they are the state of object
 */

function Complex(real, imaginary) {
    if (isNaN(real) || isNaN(imaginary)) {
        throw new TypeError();
    }
    this.r = real;
    this.i = imaginary;
}

/*
 * The instance methods of a class are defined as function-valued properties
 * of prototype object. The methods defined here are inherited by all
 * instances and provide shared behavior of the class. Note that JavaScript
 * instance methods must use the this keyword to access instance fields
 */
//Add a complex number to this one and return the sum in a new object
Complex.prototype.add = function (that) {
    return new Complex(this.r + that.r, this.i + that.i);
};

//Multiply this complex number by another and return the product
Complex.prototype.mul = function(that) {
    return new Complex(this.r * that.r - this.i * that.i,
    this.r * that.i + this.i * that.r)
};

//Return the real magnitude of a complex number. This is defined
//as its distance from the origin (0,0) of the complex plane
Complex.prototype.mag = function() {
    return Math.sqrt(this.r*this.r + this.i*this.i);
};

//Return a complex number that is the negative of this one
Complex.prototype.neg = function() {
    return new Complex(-this.r, -this.i);
};

//Convert a Complex object to a string in a useful way.
Complex.prototype.toString = function() {
   return "{" + this.r + "," + this.i + "}";
};

//Test whether this Complex number object has the same value as another
Complex.prototype.equals  = function (that) {
    return that !== null &&
        that.constructor === this.constructor &&
        this.r === that.r && this.i === that.r;
};

/*
 * Class fields (such as constants) and class methods are defined
 * as properties of the constructor. Note that class methods do not
 * generally use the this keyword: they operate only on their arguments
 */

//Here are some class fields that hold useful predefined complex numbers
//Their names are uppercase to indicate that they are constants.
//(In ECMAScript 5, we can actually make these properties read-only.)
//TODO make them read only!
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

//This class method parses a string in the format returned by the toString
//instance method and return a Complex object or throws TypeError.
Complex.parse = function (s) {
    try {
        var m = Complex._format.exec(s);
        return new Complex(parseFloat(m[1]), parseFloat(m[2]));
    } catch (x) {
        throw new TypeError("Can't parse '" + s + "' as a complex number")
    }
};

//A "private" class field used in Complex.parse() above.
//The underscore in its name indicates that it is intended for internal
//use and should not be considered part of public API of this class.
Complex._format = /^\{([^,]+),([^}]+)\}$/;