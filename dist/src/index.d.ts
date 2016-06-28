import { Provide } from './provide';
import { ProviderProvideFactory } from './provider';
import { ServiceProvideFactory } from './service';
import { FilterProvideFactory } from './filter';
import { DirectiveProvideFactory } from './directive';
import { ComponentProvideFactory } from './component';
import IModule = angular.IModule;
export interface Provider {
    (module: IModule, ...provides: Provide[]): IModule;
    provider: ProviderProvideFactory;
    service: ServiceProvideFactory;
    filter: FilterProvideFactory;
    directive: DirectiveProvideFactory;
    component: ComponentProvideFactory;
}
declare var _default: Provider;
export default _default;
