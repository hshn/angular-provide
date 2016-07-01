import { Provider } from '../../lib/provider';

export interface RunProviderFactory {
  (initializationFunction: Function): Provider;
  (inlineAnnotatedFunction: any[]): Provider;
}

export function factory(fn: any): Provider {
  return module => module.run(fn);
}
