import { Provider } from '../provider';
import IComponentOptions = angular.IComponentOptions;
export interface ComponentProvideFactory {
    (name: string, options: IComponentOptions): Provider;
}
export declare function factory(name: string, options: IComponentOptions): Provider;
