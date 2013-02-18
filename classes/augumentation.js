//Invoke the function f this many times, passing the iteration number
//For example to print 'hello' 3 times
//var n = 3;
//n.times(function(n) {console.log("hello" + n)});

Number.prototype.times = function (f, context) {
    var n = Number(this);
    for (var i=0; i<n; i++) {
        f.call(context,i);
    }
}