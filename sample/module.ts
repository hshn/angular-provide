import * as angular from 'angular';
import provide from 'angular-provide';

import { PROVIDER_PROVIDERS } from './provider';
import { SERVICE_PROVIDERS } from './service';
import { DIRECTIVE_PROVIDERS } from './directive';

export default provide(angular.module('angular-provide-sample', []), [
  ...PROVIDER_PROVIDERS,
  ...SERVICE_PROVIDERS,
  ...DIRECTIVE_PROVIDERS,
]);
