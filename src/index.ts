import { Provider } from './provider';
import {
  ProviderProvideFactory, ServiceProvideFactory, FilterProvideFactory, DirectiveProvideFactory, ComponentProvideFactory,
  providerFactory, serviceFactory, filterFactory, directiveFactory, componentFactory
} from './factory';

import IModule = angular.IModule;

export interface Provide {
  (module: IModule, ...provides: Provider[]): IModule;
  provider: ProviderProvideFactory;
  service: ServiceProvideFactory;
  filter: FilterProvideFactory;
  directive: DirectiveProvideFactory;
  component: ComponentProvideFactory;
}

export default ((): Provide => {
  let f = <Provide> function (module: IModule, ...providers: Provider[]) {
    return providers.reduce((module, provider) => provider(module), module);
  };

  f.provider = providerFactory;
  f.service = serviceFactory;
  f.filter = filterFactory;
  f.directive = directiveFactory;
  f.component = componentFactory;

  return f;
})();
