/* =========== CREATE SET ================== */
const set1 = new Set([1, 2, 3, 4, 5]);
set1.delete(2);
console.log(set1); // { 1, 3, 4, 5 }

// Delete Object
const set2 = new Set([
  { x: 10, y: 20 },
  { x: 20, y: 30 },
]);

set2.forEach((point) => {
  if (point.x > 10) {
    set2.delete(point);
  }
});
console.log(set2);
