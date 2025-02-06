function throttle(func, limit) {
  let lastFunc;
  let lastRan;

  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Example Usage
const throttledLog = throttle(() => console.log("Function executed"), 2000);

setInterval(throttledLog, 500); // Runs the function every 2 seconds
