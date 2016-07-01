import provide from 'angular-provide';

import { sampleProvider } from './sample-provider';

export const PROVIDER_PROVIDERS = [
  provide.provider(sampleProvider),
];
