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
