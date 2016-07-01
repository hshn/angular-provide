import { Provider } from '../provider';

export interface ConfigProviderFactory {
  (configFn: Function): Provider;
  (inlineAnnotatedFunction: any[]): Provider;
  (object: Object): Provider;
}

export function factory(config: any): Provider {
  return module => module.config(config);
}
