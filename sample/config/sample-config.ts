import ICompileProvider = angular.ICompileProvider;

sampleProvider.$inject = ['$compileProvider'];
export function sampleProvider($compileProvider: ICompileProvider) {
  $compileProvider.component('foo', {
    template: 'foo component',
  });
}
