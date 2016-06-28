import { Provider } from '../provider';
export interface FilterProvideFactory {
    (name: string, filterFactoryFunction: Function): Provider;
    (name: string, inlineAnnotatedFunction: any[]): Provider;
    (object: Object): Provider;
}
export declare function factory(name: any, filter?: any): Provider;
