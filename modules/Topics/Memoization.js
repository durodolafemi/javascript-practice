function memoizedAdd() {
  let cache = {}; // Storage for previous answers

  return async function (num) {
    if (num in cache) {
      console.log("Fetch Immediatly from cache...");
      return cache[num];
    } else {
      console.log("Calculating result...");
      let result = num + num;

      await new Promise((res) => setTimeout(res, 3000));
      cache[num] = result; // Store the result
      return result;
    }
  };
}

const add = memoizedAdd();

console.log(await add(5)); // "Calculating result..." -> 10
console.log(await add(5)); // "Fetch Immediatly from cache..." -> 10
