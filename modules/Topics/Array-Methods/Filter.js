export default (() => {
  const users = [
    { username: "joe009", age: 34 },
    { username: "fatcake34", age: 39 },
    { username: "reel009", age: 64 },
  ];

  console.log(users.filter((user) => user.age > 40)); 
  // [ { username: 'reel009', age: 64 } ]
})();
