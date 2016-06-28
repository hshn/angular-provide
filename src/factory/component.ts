import { Provider } from '../provider';
import IModule = angular.IModule;
import IComponentOptions = angular.IComponentOptions;

export interface ComponentProvideFactory {
  (name: string, options: IComponentOptions): Provider;
}

export function factory(name: string, options: IComponentOptions): Provider {
  return module => module.component(name, options);
}
