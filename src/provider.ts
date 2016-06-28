import { Provide } from './provide';

import IModule = angular.IModule;
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

export function factory(name: any, value?: any): Provide {
  return value === undefined
    ? module => module.provider(name)
    : module => module.provider(name, value);
}
