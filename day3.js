var expect = function (val) {
  return {
    toBe: (val2) => {
      if (val !== val2) throw new Error("Not Equal");
      return true;
    },
    notToBe: (val2) => {
      if (val === val2) throw new Error("Equal");
      return true;
    },
  };
};

console.log(expect(5).toBe(5)); // Should output: { value: true }
console.log(expect(5).notToBe(9)); // Should output: { value: true }
