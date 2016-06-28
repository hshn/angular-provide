import { Provider } from '../provider';
import IDirectiveFactory = angular.IDirectiveFactory;
export interface DirectiveProvideFactory {
    (name: string, directiveFactory: IDirectiveFactory): Provider;
    (name: string, inlineAnnotatedFunction: any[]): Provider;
    (object: Object): Provider;
}
export declare function factory(name: any, directive?: any): Provider;
