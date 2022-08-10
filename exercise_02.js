let values = [23, "something", true, null, undefined];

for (let x of values) {
  switch (typeof x) {
    case "number":
      console.log("x - number");
      break;
    case "string":
      console.log("x - string");
      break;
    case "boolean":
      console.log("x - boolean");
      break;
    default:
      console.log("x type is not defined");
  }
}
