function arraycopy(
    /* array */ from, /* index */ from_start, /* array */ to, /* index */ to_start, /* integer */ length
) {
    //CODE GOES HERE
}

//Arguments are optional
function easycopy(args) {
    arraycopy(args.from,
        args.from_start || 0,
        args.to,
        args.to_start || 0,
        args.length);
}

//Here is how you invoke easycopy
var a = [1,2,3,4], b = [];
easycopy(from:a, to:b, length:4);
