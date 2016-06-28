import { Provide } from './provide';
import IComponentOptions = angular.IComponentOptions;
export interface ComponentProvideFactory {
    (name: string, options: IComponentOptions): Provide;
}
export declare function factory(name: string, options: IComponentOptions): Provide;
