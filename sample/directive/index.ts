import provide from 'angular-provide';

import { sampleComponentOptions } from './sample-component';
import { sampleDirectiveFactory } from './sample-directive';

export const DIRECTIVE_PROVIDERS = [
  provide.component('sampleComponentOptions', sampleComponentOptions),
  provide.directive('sampleDirective', sampleDirectiveFactory),
];
