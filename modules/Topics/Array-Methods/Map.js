export default (() => {
  const users = [
    { username: "joe009", age: 34 },
    { username: "fatcake34", age: 39 },
    { username: "reel009", age: 64 },
  ];

  console.log(users.map((user) => user.age)); // [ 34, 39, 64 ]
})();
