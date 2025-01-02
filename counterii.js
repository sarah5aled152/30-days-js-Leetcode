/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function (init) {
  let sum = init;

  return {
    increment: () => {
      return (sum += 1);
    },
    decrement: () => {
      return (sum -= 1);
    },
    reset: () => {
      sum = init;
      return sum;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
