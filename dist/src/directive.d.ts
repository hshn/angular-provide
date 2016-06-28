import { Provide } from './provide';
import IDirectiveFactory = angular.IDirectiveFactory;
export interface DirectiveProvideFactory {
    (name: string, directiveFactory: IDirectiveFactory): Provide;
    (name: string, inlineAnnotatedFunction: any[]): Provide;
    (object: Object): Provide;
}
export declare function factory(name: any, directive?: any): Provide;
