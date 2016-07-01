import { Provider } from './provider';
import {
  ProviderProvideFactory, ConfigProviderFactory, ServiceProvideFactory, FactoryProvideFactory, FilterProvideFactory, DirectiveProvideFactory, ComponentProvideFactory, RunProviderFactory,
  providerFactory, configFactory, serviceFactory, factoryFactory, filterFactory, directiveFactory, componentFactory, runFactory
} from './factory';

import IModule = angular.IModule;

export interface Provide {
  (module: IModule, ...provides: Provider[]): IModule;
  provider: ProviderProvideFactory;
  config: ConfigProviderFactory,
  service: ServiceProvideFactory;
  factory: FactoryProvideFactory;
  filter: FilterProvideFactory;
  directive: DirectiveProvideFactory;
  component: ComponentProvideFactory;
  run: RunProviderFactory;
}

export default ((): Provide => {
  let f = <Provide> function (module: IModule, ...providers: Provider[]) {
    return providers.reduce((module, provider) => provider(module), module);
  };

  f.provider = providerFactory;
  f.config = configFactory;
  f.service = serviceFactory;
  f.factory = factoryFactory;
  f.filter = filterFactory;
  f.directive = directiveFactory;
  f.component = componentFactory;
  f.run = runFactory;

  return f;
})();
