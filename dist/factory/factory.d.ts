import { Provider } from '../provider';
export interface FactoryProvideFactory {
    (name: string, $getFn: Function): Provider;
    (name: string, inlineAnnotatedFunction: any[]): Provider;
    (object: Object): Provider;
}
export declare function factory(name: any, fn?: any): Provider;
