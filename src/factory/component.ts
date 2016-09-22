import * as angular from 'angular';
import { Provider, provider } from '../provider';
import IModule = angular.IModule;
import IComponentOptions = angular.IComponentOptions;

export interface ComponentProvideFactory {
  (name: string, options: IComponentOptions): Provider;
}

export function factory(name: string, options: IComponentOptions): Provider {
  return provider(module => module.component(name, options));
}
