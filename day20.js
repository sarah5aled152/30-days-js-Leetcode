/**
 * @param {Object|Array} obj
 * @return {boolean}

var isEmpty = function(obj) {
    
}; */

const isEmpty = function (obj) {
  return Array.isArray(obj) && obj.length == 0
    ? true
    : Object.keys(obj).length === 0
    ? true
    : false;
};

const empty = isEmpty({ name: "sara" });

console.log(empty);

/**
 * 
 * let obj = {};
if (JSON.stringify(obj) === '{}') 
{ console.log("Empty Object") }
else { console.log("Not Empty Object") }


let obj = {};
let res = true;

for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        res = false;
        break;
    }
}
if (res == true) { console.log("Empty Object") }
else { console.log("Not Empty Object") };






let obj = {};
if (Object.keys(obj).length === 0)
{ console.log("Empty Object") }
else { console.log("Not Empty Object") }



const array1 = [1, 2, 3];
const notArray = { name: 'example' };
console.log(array1 instanceof Array);
console.log(notArray instanceof Array);



 */
