import { IDirectiveFactory } from 'angular';
import { Provider, provider } from '../provider';

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
