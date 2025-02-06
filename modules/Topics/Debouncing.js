function debounce(func) {
  let timeoutId;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(), 1001);
  };
}

function counterFunc() {
  console.log("Debounce...");
}
const debounceAct = debounce(counterFunc);

setInterval(() => {
  debounceAct();
}, 1000);
// export default (() => {})();
