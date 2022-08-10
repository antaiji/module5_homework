let arr = [1, 2, "something"]; // => false
// let arr = ["something", "something"]; => true

console.log(new Set(arr).size === 1 ? true : false);
