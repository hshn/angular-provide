import { Provider } from '../provider';
import IModule = angular.IModule;

export interface FilterProvideFactory {
  (name: string, filterFactoryFunction: Function): Provider;
  (name: string, inlineAnnotatedFunction: any[]): Provider;
  (object: Object): Provider;
}

export function factory(name: any, filter?: any): Provider {
  return filter === undefined
    ? module => module.filter(name)
    : module => module.filter(name, filter);
};
