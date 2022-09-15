export const randInt = (lower, upper) => {
  var range = upper - lower;
  return Math.trunc((Math.random() * range) + lower);
}