// Задача 1: Find Max
// class FindMax {
//   constructor(arr) {
//     this.arr = arr;
//   }

//   findMaxValue() {
//     let maxValue = this.arr[0];
//     for (let i = 0; i < this.arr.length; i++) {
//       console.log(this.arr[i]);
//       if (this.arr[i] > maxValue) {
//         maxValue = this.arr[i];
//       }
//     }
//     console.log(maxValue, 'Max V');
//     return maxValue;
//   }
// }

// const test = new FindMax([-5, -2, -10]);
// test.findMaxValue();

// Задача 2: Count Vowels

// class Vowels {
//   constructor(str) {
//     this.str = str.toLowerCase();
//   }

//   countVowels() {
//     const vowelsConst = ['a', 'e', 'i', 'o', 'u'];
//     let countVowelsSummary = 0;
//     for (let i = 0; i < this.str.length; i++) {
//       if (vowelsConst.includes(this.str[i])) {
//         countVowelsSummary++;
//         console.log(this.str[i]);
//       }
//     }
//     return countVowelsSummary;
//   }
// }

// const hello = new Vowels('hello');
// console.log(hello.countVowels());

// Задача 3: Reverse a String

// class ReverseString {
//   constructor(str) {
//     this.str = str;
//   }

//   reverseStr() {
//     let reverse = '';
//     console.log(this.str);
//     for (let i = this.str.length - 1; i >= 0; i--) {
//       reverse = reverse + this.str[i];
//     }
//     return reverse;
//   }
// }

// Задача 4: Most Frequent Character

// class MostCharacter {
//   constructor(character) {
//     this.character = character;
//   }

//   giveMostFrequentCharacter() {
//     let objChar = {};
//     for (let i = 0; i < this.character.length; i++) {
//       if (objChar[this.character[i]] === undefined) {
//         objChar[this.character[i]] = 1;
//       } else {
//         objChar[this.character[i]] = objChar[this.character[i]] + 1;
//         console.log(objChar[this.character[i]], this.character[i], objChar);
//       }
//     }
//     Object.keys(objChar).forEach((key) => {
//       console.log(key, objChar, objChar[key]);
//     });
//   }
// }

// const char = new MostCharacter('abccacac');

// char.giveMostFrequentCharacter();
// class Solution {
//   isAnagram(s, t) {
//     console.log(s, t);
//     let objRepeatingLetters = {};
//     let objRepeatingLetters2 = {};
//     if (s.length === t.length) {
//       for (let i = 0; i < s.length; i++) {
//         if (objRepeatingLetters[s[i]] === undefined) {
//           objRepeatingLetters[s[i]] = 1;
//         } else {
//           objRepeatingLetters[s[i]] = objRepeatingLetters[s[i]] + 1;
//         }
//       }
//       for (let i = 0; i < t.length; i++) {
//         if (objRepeatingLetters2[t[i]] === undefined) {
//           objRepeatingLetters2[t[i]] = 1;
//         } else {
//           objRepeatingLetters2[t[i]] = objRepeatingLetters2[t[i]] + 1;
//         }
//       }
//     } else {
//       return false;
//     }
//     const keys = Object.keys(objRepeatingLetters);
//     for (let i = 0; i < keys.length; i++) {
//       if (objRepeatingLetters[keys[i]] === objRepeatingLetters2[keys[i]]) {
//       } else {
//         return false;
//       }
//     }
//     return true;
//   }
// }
// // {}
// const result = new Solution();
// console.log(result.isAnagram('ab', 'ac'));

// const testObject = {
//   name: 'Time',
//   age: 21,
//   city: 'Almaty',
// };

// for (const key in testObject) {
//   console.log(key, testObject[key]);
// }

// const testObjectEntries = Object.entries(testObject);
// console.log(testObjectEntries);

// const testEntriesFormatted = testObjectEntries.map(([key, value]) => {
//   return [key.toUpperCase(), `~~~${value}`];
// });

// console.log(testEntriesFormatted);

// class Products {
//   constructor(products, minPrice) {
//     this.products = products;
//     this.minPrice = minPrice;
//   }

//   allPrice() {
//     console.log(this.products);
//     let sumPrices = 0;
//     let categoryObject = {};
//     for (let i = 0; i < this.products.length; i++) {
//       if (categoryObject[this.products[i].category] === undefined) {
//         categoryObject[this.products[i].category] = this.products[i].price;
//       } else {
//         categoryObject[this.products[i].category] =
//           categoryObject[this.products[i].category] + this.products[i].price;
//       }
//     }
//     console.log(categoryObject);
//     return sumPrices;
//   }
// }

// const userProducts = new Products(
//   [
//     { name: 'apple', price: 10, category: 'fruit' },
//     { name: 'banana', price: 5, category: 'veggie' },
//     { name: 'cherry', price: 20, category: 'fruit' },
//     { name: 'melon', price: 30, category: 'veggie' },
//   ],
//   15,
// );
// console.log(userProducts.allPrice());
