import { Provide } from './provide';
import { ProviderProvideFactory, factory as providerFactory } from './provider';
import { ServiceProvideFactory, factory as serviceFactory } from './service';
import { FilterProvideFactory, factory as filterFactory } from './filter';
import { DirectiveProvideFactory, factory as directiveFactory } from './directive';
import { ComponentProvideFactory, factory as componentFactory } from './component';

import IModule = angular.IModule;

export interface Provider {
  (module: IModule, ...provides: Provide[]): IModule;
  provider: ProviderProvideFactory;
  service: ServiceProvideFactory;
  filter: FilterProvideFactory;
  directive: DirectiveProvideFactory;
  component: ComponentProvideFactory;
}

export default ((): Provider => {
  let f = <Provider> function (module: IModule, ...provides: Provide[]) {
    return provides.reduce((module, provide) => provide(module), module);
  };

  f.provider = providerFactory;
  f.service = serviceFactory;
  f.filter = filterFactory;
  f.directive = directiveFactory;
  f.component = componentFactory;

  return f;
})();
