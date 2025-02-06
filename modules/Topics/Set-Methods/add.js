/* =========== CREATE SET ================== */
const set1 = new Set([1, 2, 3, 4, 5]);

/* ========== SET METHODS ========== */
// add()
set1.add(42);
set1.add(42);
set1.add(13);
set1.add(5).add("some text"); // chainable

console.log(set1); // { 1, 2, 3, 4, 5, 42, 13, 'some text' }