import IModule = angular.IModule;

export interface Provider {
  provide(module: IModule): IModule
  priority(priority: number): Provider;
  compare(other: Provider): number;
}

}
