/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 *
var argumentsLength = function (...args) {};
*/

const argumentsLength = function (...args) {
  return args.length;
};

const arg1 = argumentsLength([], null, 99, "sara");

console.log(arg1);
