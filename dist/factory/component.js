"use strict";
function factory(name, options) {
    return function (module) { return module.component(name, options); };
}
exports.factory = factory;
