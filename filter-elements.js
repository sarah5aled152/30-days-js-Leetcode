/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = (arr, fn) => {
  let filteredArr = [];
  arr.forEach((ele, i) => {
    console.log(typeof i);
    if (fn(arr[i], Number(i))) filteredArr.push(arr[i]);
  });
  return filteredArr;
};

function greaterThan10(n) {
  return n > 10;
}

const arr = [0, 10, 20, 30];

var testFilter = filter(arr, greaterThan10);
console.log(testFilter);
