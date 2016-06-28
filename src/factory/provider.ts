import { Provider } from '../provider';

import IModule = angular.IModule;
import IServiceProviderFactory = angular.IServiceProviderFactory;
import IServiceProviderClass = angular.IServiceProviderClass;
import IServiceProvider = angular.IServiceProvider;

export interface ProviderProvideFactory {
  (name: string, serviceProviderFactory: IServiceProviderFactory): Provider;
  (name: string, serviceProviderConstructor: IServiceProviderClass): Provider;
  (name: string, inlineAnnotatedConstructor: any[]): Provider;
  (name: string, providerObject: IServiceProvider): Provider;
  (object: Object): Provider;
}

export function factory(name: any, value?: any): Provider {
  return value === undefined
    ? module => module.provider(name)
    : module => module.provider(name, value);
}
