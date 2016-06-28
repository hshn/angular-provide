import { Provider } from './provide';
import IComponentOptions = angular.IComponentOptions;
export interface ComponentProvideFactory {
    (name: string, options: IComponentOptions): Provider;
}
export declare function factory(name: string, options: IComponentOptions): Provider;
