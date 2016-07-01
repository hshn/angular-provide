import { Provider, provider } from '../provider';

export interface RunProviderFactory {
  (initializationFunction: Function): Provider;
  (inlineAnnotatedFunction: any[]): Provider;
}

export function factory(fn: any): Provider {
  return provider(module => module.run(fn));
}
