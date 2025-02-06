export default (()=> {
    let isAllow;

/* Nullish Coalescing */
const isAdmin = isAllow ?? "Not Allow";

console.log(isAdmin); // "Not Allow"
})()