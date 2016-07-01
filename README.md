angular-provide
===============

[![Build Status](https://travis-ci.org/hshn/angular-provide.svg?branch=master)](https://travis-ci.org/hshn/angular-provide) [![npm version](https://badge.fury.io/js/angular-provide.svg)](https://badge.fury.io/js/angular-provide)

This module provides a way to separate component definitions with component registrations for AngularJS.

The concept which is using in this module are influenced by angular2 `Provider`.

[sample source code here](https://github.com/hshn/angular-provide/tree/master/sample)

# Usage

## Install

```bash
$ npm install angular-provide --save
```

## Define providers

### Config

```js
import provide from 'angular-provide';

// Configuration will be registered.
let provider = provide.config(function ($someProvider) {
  // ...
});
```

### Provider

```js
import provide from 'angular-provide';

// Provider will be registered as `foo`.
let provider = provide.provider('foo', function () {
  // ...
});
```

### Service

```js
import provide from 'angular-provide';

import { ServiceClass } from './service';

// ServiceClass will be registered as `foo`.
let provider = provide.service('foo', ServiceClass);
```

### Factory

```js
import provide from 'angular-provide';

import { ServiceClass } from './service';

// Factory will be registered as `foo`.
let provider = provide.factory('foo', function () {
  // ...
});
```

### Directive

```js
import provide from 'angular-provide';

import { ServiceClass } from './service';

// Directive will be registered as `foo`.
let provider = provide.directive('foo', function () {
  // ...
});
```

### Component

```js
import provide from 'angular-provide';

import { ServiceClass } from './service';

// Directive will be registered as `foo`.
let provider = provide.component('foo', {
  // ...
});
```

### Run

```js
import provide from 'angular-provide';

import { ServiceClass } from './service';

// Initialization function will be registered.
let provider = provide.run(function () {
  // ...
});
```

## Aggregate providers

```js
import provide from 'angular-provide';

const FOO_PROVIDERS = [
  provide.service('bar', ...),
  provide.factory('baz', ...),
  provide.config(...),
];

// export providers
export FOO_PROVIDERS;
```

## Apply providers to a module

```js
import * as angular from 'angular';
import provide from 'angular-provide';

import { MY_DIRECTIVE_PROVIDERS } from './directives';
import { MY_SERVICE_PROVIDERS } from './services';

// create module
let module = angular.module('myApp', []);

// apply providers to the module
provide(module, [
    ...MY_DIRECTIVE_PROVIDERS,
    ...MY_SERVICE_PROVIDERS,
]);

```
