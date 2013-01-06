/*
 * Copy the enumerable properties of p to o.
 * If o and p have a property by the same name, o's property is overwritten
 * This function does not handle getters and setters or copy attributes
 *
*/
function extend(o, p) {
    for (prop in p) {
        o[prop] = p[prop];
    }
    return o;
}

/*
 * Copy enumerable properties of p to o and return o.
 * If o and p have a property by the same name, o's property is left alone.
 * This functions does not handle getters and setters or copy attributes
 */
function merge(o, p) {
    for (prop in p) {
        if (o.hasOwnProperty(prop)) continue;
        o[prop] = p[prop];
    }
    return o;
}

/*
 * Remove properties from o if there in not property with the same name in p.
 * return o.
 */
function restrict(o,p) {
    for (prop in o) {
        if(!p[prop]) delete o[prop];
    }
    return o;
}

/*
 * For each property of p, delete the property with the same name from o.
 * return o
 */
function substract(o,p) {
    for (prop in p) {
        delete o[prop];
    }
    return o;
}

/*
 * Return a new object that holds only the properties of both p and o.
 * If p and o have properties by the same name, the values from p are used
 *
*/
function union(o, p) {
    return extend(extend({},o), p);
}

/*
 * Return a new object that holds only the properties from o that also appear in p.
 * This is something like the intersection of o and p, but the properties in p are discarded
 */
function intersection(o,p) {
    return restrict(extend({}, o), p);
}

/*
 * Return an array that holds the names of the enumerable own properties of o.
 */
function keys(o) {
    if (typeOf(o) !== 'object') throw TypeError();
    var result = [];
    for (prop in o) {
        if (o.hasOwnProperty(prop)) {
            result.push(prop);
        }
    }
    return prop;
}