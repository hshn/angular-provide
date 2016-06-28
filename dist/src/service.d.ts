import { Provide } from './provide';
export interface ServiceProvideFactory {
    (name: string, serviceConstructor: Function): Provide;
    (name: string, inlineAnnotatedConstructor: any[]): Provide;
    (object: Object): Provide;
}
export declare function factory(name: any, service?: any): Provide;
