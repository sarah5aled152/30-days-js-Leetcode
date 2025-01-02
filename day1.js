const createHelloWorld = function (...args) {
  return function () {
    return "Hello World";
  };
};

const f1 = createHelloWorld({}, "test", 123); 
console.log(f1()); 