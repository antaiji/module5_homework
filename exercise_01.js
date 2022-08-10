let val = prompt("Input your value please");

console.log(
  typeof +val === "number" && !isNaN(val)
    ? `The number is ${+val % 2 ? "odd" : "even"}`
    : "Please enter a valid number"
);
