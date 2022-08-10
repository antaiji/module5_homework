let fruitsPrices = new Map([
  ["banana", 150],
  ["orange", 200],
  ["mango", 250],
]);

for (let fruit of fruitsPrices.keys()) {
  console.log(`Fruit ${fruit} costs ${fruitsPrices.get(fruit)}₽`);
}
