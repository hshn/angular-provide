import { Provide } from './provide';
import IServiceProviderFactory = angular.IServiceProviderFactory;
import IServiceProviderClass = angular.IServiceProviderClass;
import IServiceProvider = angular.IServiceProvider;
export interface ProviderProvideFactory {
    (name: string, serviceProviderFactory: IServiceProviderFactory): Provide;
    (name: string, serviceProviderConstructor: IServiceProviderClass): Provide;
    (name: string, inlineAnnotatedConstructor: any[]): Provide;
    (name: string, providerObject: IServiceProvider): Provide;
    (object: Object): Provide;
}
export declare function factory(name: any, value?: any): Provide;
