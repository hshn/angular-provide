"use strict";
function factory(name, filter) {
    return filter === undefined
        ? function (module) { return module.filter(name); }
        : function (module) { return module.filter(name, filter); };
}
exports.factory = factory;
;
//# sourceMappingURL=filter.js.map