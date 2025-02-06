export default (()=> {
    /* Array Spread Operator (...) */
const numberList = [1,2,3,4,5,6,7,8,9]
const newSpread = [...numberList]

console.log(newSpread);
/* [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
] */

console.log(...numberList);
// 1 2 3 4 5 6 7 8 9

})()