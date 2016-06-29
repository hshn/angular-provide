"use strict";
function factory(name, fn) {
    return fn === undefined
        ? function (module) { return module.factory(name); }
        : function (module) { return module.factory(name, fn); };
}
exports.factory = factory;
;
