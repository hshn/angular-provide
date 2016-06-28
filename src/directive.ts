import { Provide } from './provide';
import IModule = angular.IModule;
import IDirectiveFactory = angular.IDirectiveFactory;

export interface DirectiveProvideFactory {
  (name: string, directiveFactory: IDirectiveFactory): Provide;
  (name: string, inlineAnnotatedFunction: any[]): Provide;
  (object: Object): Provide;
}

export function factory(name: any, directive?: any): Provide {
  return directive === undefined
    ? module => module.directive(name)
    : module => module.directive(name, directive);
}
