import * as angular from 'angular';
import 'angular-mocks/ngMock';
import provide from '../src';
import { Provider } from '../src/provider';
import ICompileProvider = angular.ICompileProvider;
import IRootScopeService = angular.IRootScopeService;
import ICompileService = angular.ICompileService;

describe('Functional test', () => {
  describe('Provider', () => {
    function bootstrap(...providers: Provider[]) {
      let module = provide(angular.module('test' + Math.random(), []), ...providers);

      angular.mock.module(module.name);
    }

    it('should be applied component provider', () => {
      bootstrap(provide.component('component', {
        template: 'component provider'
      }));


      let $element;
      angular.mock.inject(($rootScope: IRootScopeService, $compile: ICompileService) => {
        $element = $compile(`<component></component>`)($rootScope.$new());
      });

      expect($element.text()).toEqual('component provider');
    });

    it('should be applied config provider', () => {
      bootstrap(provide.config(($compileProvider: ICompileProvider) => {
        $compileProvider.component('config', {
          template: 'config provider'
        });
      }));

      let $element;
      angular.mock.inject(($rootScope: IRootScopeService, $compile: ICompileService) => {
        $element = $compile(`<config></config>`)($rootScope.$new());
      });

      expect($element.text()).toEqual('config provider');
    });

    it('should be applied directive provider', () => {
      bootstrap(provide.directive('directive', () => {
        return {
          template: 'directive provider'
        };
      }));

      let $element;
      angular.mock.inject(($rootScope: IRootScopeService, $compile: ICompileService) => {
        $element = $compile(`<directive></directive>`)($rootScope.$new());
      });

      expect($element.text()).toEqual('directive provider');
    });

    it('should be applied factory provider', () => {
      bootstrap(provide.factory('factory', () => {
        return () => 'factory provider';
      }));

      let factory;
      angular.mock.inject((_factory_) => factory = _factory_);

      expect(factory()).toEqual('factory provider');
    });

    it('should be applied filter provider', () => {
      bootstrap(provide.filter('filter', () => {
        return value => 'filter provider';
      }));

      let filter;
      angular.mock.inject($filter => filter = $filter('filter'));
      expect(filter(null)).toEqual('filter provider');
    });

    it('should be applied provider provider', () => {
      bootstrap(provide.provider('provider', {
        $get: () => () => 'provider provider'
      }));

      let provider;
      angular.mock.inject(_provider_ => provider = _provider_);

      expect(provider()).toEqual('provider provider');
    });

    it('should be applied run provider', () => {
      bootstrap(provide.run(($rootScope) => {
        $rootScope.run = 'run provider';
      }));

      let $rootScope;
      angular.mock.inject(_$rootScope_ => $rootScope = _$rootScope_);
      expect($rootScope.run).toEqual('run provider');
    });

    it('should be applied service provider', () => {
      class Service {
        service() {
          return 'service provider';
        }
      }

      bootstrap(provide.service('service', Service));

      let service;
      angular.mock.inject(_service_ => service = _service_);
      expect(service.service()).toEqual('service provider');
    });
  });
});
