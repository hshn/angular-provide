import * as angular from 'angular';
import { Provider, provider } from '../provider';

import IModule = angular.IModule;

export interface ServiceProvideFactory {
  (name: string, serviceConstructor: Function): Provider;
  (name: string, inlineAnnotatedConstructor: any[]): Provider;
  (object: Object): Provider;
}

export function factory(name: any, service?: any): Provider {
  return service === undefined
    ? provider(module => module.service(name))
    : provider(module => module.service(name, service));
};
