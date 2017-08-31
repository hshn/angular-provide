import { IComponentOptions } from 'angular';
import { Provider, provider } from '../provider';

export interface ComponentProvideFactory {
  (name: string, options: IComponentOptions): Provider;
}

export function factory(name: string, options: IComponentOptions): Provider {
  return provider(module => module.component(name, options));
}
