"use strict";
function factory(name, value) {
    return value === undefined
        ? function (module) { return module.provider(name); }
        : function (module) { return module.provider(name, value); };
}
exports.factory = factory;
