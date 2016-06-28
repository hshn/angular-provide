import IModule = angular.IModule;
import { Provider } from '../provider';

export interface ServiceProvideFactory {
  (name: string, serviceConstructor: Function): Provider;
  (name: string, inlineAnnotatedConstructor: any[]): Provider;
  (object: Object): Provider;
}

export function factory(name: any, service?: any): Provider {
  return service === undefined
    ? module => module.service(name)
    : module => module.service(name, service);
};
