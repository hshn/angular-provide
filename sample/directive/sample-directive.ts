import IDirective = angular.IDirective;

export function sampleDirectiveFactory(): IDirective {
  return {
    template: 'sample directive',
  }
};
