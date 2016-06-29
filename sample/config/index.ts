import provide from '../.';

import { sampleProvider } from './sample-config';

export const CONFIG_PROVIDERS = [
  provide.provider(sampleProvider),
];
