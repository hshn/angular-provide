import { Provider } from './provider';
import { ProviderProvideFactory, ServiceProvideFactory, FilterProvideFactory, DirectiveProvideFactory, ComponentProvideFactory } from './factory';
import IModule = angular.IModule;
export interface Provide {
    (module: IModule, ...provides: Provider[]): IModule;
    provider: ProviderProvideFactory;
    service: ServiceProvideFactory;
    filter: FilterProvideFactory;
    directive: DirectiveProvideFactory;
    component: ComponentProvideFactory;
}
declare var _default: Provide;
export default _default;
