function inherit(p) {
            if (p == null) throw new TypeError();
            if (Object.create) {
                return Object.create(p)
            }
            var t = typeof p;
            if (t !== 'object' && t !== 'function') throw new TypeError()
            function f() {}; //define dummy constructor function
            f.prototype = p;
            return new f();
}