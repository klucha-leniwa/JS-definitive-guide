/*
 * Add a nonenumerable extend() method to Object.prototype
 * This method extends the object on which it is called by copying properties
 * from the object passed as its argument. All properties attributes are
 * copied, not just the property value. All own properties (even nonenumerable ones)
 * of the argument are copied unless a property
 * with the same name already exists
 */
Object.defineProperty(Object.prototype,
    'extend',
    {
        writable: true,
        enumerable: false,
        configurable: false,
        value: function(o) {
            var names = Object.getOwnPropertyNames(o);
            for (var i=0; i < names.length; i++) {
                if(names[i] in this) continue;
                var desc = Object.getOwnPropertyDescriptor(o, names[i]);
                Object.defineProperty(this, names[i], desc);
            }
        }
    }
);