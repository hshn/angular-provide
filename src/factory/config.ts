import { Provider, provider } from '../provider';

export interface ConfigProviderFactory {
  (configFn: Function): Provider;
  (inlineAnnotatedFunction: any[]): Provider;
  (object: Object): Provider;
}

export function factory(config: any): Provider {
  return provider(module => module.config(config));
}
