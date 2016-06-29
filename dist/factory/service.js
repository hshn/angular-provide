"use strict";
function factory(name, service) {
    return service === undefined
        ? function (module) { return module.service(name); }
        : function (module) { return module.service(name, service); };
}
exports.factory = factory;
;
//# sourceMappingURL=service.js.map