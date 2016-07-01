export function sampleProvider() {
  let value = 'sample';

  this.$get = () => value;
}
