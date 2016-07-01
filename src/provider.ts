import IModule = angular.IModule;

export interface Provider {
  provide(module: IModule): IModule
  priority(priority: number): Provider;
  compare(other: Provider): number;
}

export interface Provide {
  (module: IModule): IModule;
}

export function provider(provide: Provide): Provider {
  return new ProviderImpl(provide)
}

class ProviderImpl implements Provider {
  constructor(public provide: Provide, private _priority: number = 0) {}

  priority(priority: number): Provider {
    this._priority = priority;

    return this;
  }

  compare(other: Provider): number {
    return this._priority - (other as ProviderImpl)._priority;
  }
}
