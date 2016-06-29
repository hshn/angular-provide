"use strict";
var factory_1 = require('./factory');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    var f = function (module) {
        var providers = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            providers[_i - 1] = arguments[_i];
        }
        return providers.reduce(function (module, provider) { return provider(module); }, module);
    };
    f.provider = factory_1.providerFactory;
    f.service = factory_1.serviceFactory;
    f.factory = factory_1.factoryFactory;
    f.filter = factory_1.filterFactory;
    f.directive = factory_1.directiveFactory;
    f.component = factory_1.componentFactory;
    return f;
})();
