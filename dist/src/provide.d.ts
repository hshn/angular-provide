import IModule = angular.IModule;
export interface Provider {
    (module: IModule): IModule;
}
