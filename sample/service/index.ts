import provide from '../.';

import { sampleFactory } from './sample-factory';
import { SampleService } from './sample-service';

export const SERVICE_PROVIDERS = [
  provide.service('sampleService', SampleService),
  provide.factory('sampleFactory', sampleFactory),
];
