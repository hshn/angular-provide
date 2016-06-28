import { Provide } from './provide';
import IModule = angular.IModule;

export interface FilterProvideFactory {
  (name: string, filterFactoryFunction: Function): Provide;
  (name: string, inlineAnnotatedFunction: any[]): Provide;
  (object: Object): Provide;
}

export function factory(name: any, filter?: any): Provide {
  return filter === undefined
    ? module => module.filter(name)
    : module => module.filter(name, filter);
};
