import { Provide } from './provide';
import IModule = angular.IModule;
import IComponentOptions = angular.IComponentOptions;

export interface ComponentProvideFactory {
  (name: string, options: IComponentOptions): Provide;
}

export function factory(name: string, options: IComponentOptions): Provide {
  return module => module.component(name, options);
}
