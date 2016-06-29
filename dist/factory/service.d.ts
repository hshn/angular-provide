import { Provider } from '../provider';
export interface ServiceProvideFactory {
    (name: string, serviceConstructor: Function): Provider;
    (name: string, inlineAnnotatedConstructor: any[]): Provider;
    (object: Object): Provider;
}
export declare function factory(name: any, service?: any): Provider;
