import { Provider } from '../provider';
import IModule = angular.IModule;

export interface FactoryProvideFactory {
  (name: string, $getFn: Function): Provider;
  (name: string, inlineAnnotatedFunction: any[]): Provider;
  (object: Object): Provider;
}

export function factory(name: any, fn?: any): Provider {
  return fn === undefined
    ? module => module.factory(name)
    : module => module.factory(name, fn);
};
