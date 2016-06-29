import * as angular from 'angular';
import provide from '.';

import { CONFIG_PROVIDERS } from './config';
import { SERVICE_PROVIDERS } from './service';
import { DIRECTIVE_PROVIDERS } from './directive';

export default provide(angular.module('angular-provide-sample', []), [
  ...CONFIG_PROVIDERS,
  ...SERVICE_PROVIDERS,
  ...DIRECTIVE_PROVIDERS,
]);
