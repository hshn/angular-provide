"use strict";
function factory(name, directive) {
    return directive === undefined
        ? function (module) { return module.directive(name); }
        : function (module) { return module.directive(name, directive); };
}
exports.factory = factory;
//# sourceMappingURL=directive.js.map