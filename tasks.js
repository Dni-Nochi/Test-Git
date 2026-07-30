const nums = [5, 10, 15, 20];

const sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum);

const numsTwo = [1, 2, 3, 4];

const multip = numsTwo.reduce((acc, curr) => {
  return acc * curr;
}, 1);

console.log(multip);

const nums3 = [3, 8, 1, 6];

const needNum = nums3.some((num) => {
  return num > 5;
});

console.log(needNum);

const allPlus = nums3.every((num) => {
  return num > 0;
});

console.log(allPlus);

const nums4 = [40, 1, 5, 200, 30];
nums4.sort((a, b) => {
  return a - b;
});

console.log(nums4);

nums4.sort((a, b) => {
  return b - a;
});

console.log(nums4);

nums4.sort((a, b) => {
  return a - b;
});

console.log(nums4);

const cart = [
  { name: 'Хлеб', price: 200 },
  { name: 'Молоко', price: 450 },
  { name: 'Сыр', price: 1200 },
];

const allPrice = cart.reduce((acc, cartItems) => {
  return acc + cartItems.price;
}, 0);

console.log(allPrice);
