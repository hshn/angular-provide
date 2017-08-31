import { IModule } from 'angular';
import {
  componentFactory, ComponentProvideFactory,
  configFactory, ConfigProviderFactory,
  directiveFactory, DirectiveProvideFactory,
  factoryFactory, FactoryProvideFactory,
  filterFactory, FilterProvideFactory,
  providerFactory, ProviderProvideFactory,
  runFactory, RunProviderFactory,
  serviceFactory, ServiceProvideFactory,
} from './factory';
import { Provider } from './provider';

export interface Provide {
  (module: IModule, ...provides: Array<Provider | Provider[]>): IModule;
  provider: ProviderProvideFactory;
  config: ConfigProviderFactory,
  service: ServiceProvideFactory;
  factory: FactoryProvideFactory;
  filter: FilterProvideFactory;
  directive: DirectiveProvideFactory;
  component: ComponentProvideFactory;
  run: RunProviderFactory;
}

export const provide: Provide = ((): Provide => {
  let f = <Provide> function (module: IModule, ...providers: Array<Provider | Provider[]>) {
    return providers
      .reduce<Provider[]>((providers, provider) => providers.concat(provider), [])
      .sort((a, b) => - a.compare(b))
      .reduce((module, provider) => provider.provide(module), module);
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

export default provide

export { Provider }
