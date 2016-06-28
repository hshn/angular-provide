import IModule = angular.IModule;
export interface Provide {
    (module: IModule): IModule;
}
