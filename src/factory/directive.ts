import { Provider, provider } from '../provider';
import IModule = angular.IModule;
import IDirectiveFactory = angular.IDirectiveFactory;

export interface DirectiveProvideFactory {
  (name: string, directiveFactory: IDirectiveFactory): Provider;
  (name: string, inlineAnnotatedFunction: any[]): Provider;
  (object: Object): Provider;
}

export function factory(name: any, directive?: any): Provider {
  return directive === undefined
    ? provider(module => module.directive(name))
    : provider(module => module.directive(name, directive));
}
