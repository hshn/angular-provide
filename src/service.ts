import IModule = angular.IModule;
import { Provide } from './provide';

export interface ServiceProvideFactory {
  (name: string, serviceConstructor: Function): Provide;
  (name: string, inlineAnnotatedConstructor: any[]): Provide;
  (object: Object): Provide;
}

export function factory(name: any, service?: any): Provide {
  return service === undefined
    ? module => module.service(name)
    : module => module.service(name, service);
};
