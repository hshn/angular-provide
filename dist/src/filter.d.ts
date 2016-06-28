import { Provide } from './provide';
export interface FilterProvideFactory {
    (name: string, filterFactoryFunction: Function): Provide;
    (name: string, inlineAnnotatedFunction: any[]): Provide;
    (object: Object): Provide;
}
export declare function factory(name: any, filter?: any): Provide;
