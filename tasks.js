// Задача с NeetCode Contains Duplicate
class Solution {
  hasDuplicate(arr) {
    const mySet = new Set();
    for (let i = 0; i < arr.length; i++) {
      if (mySet.has(arr[i])) {
        return true;
      } else {
        mySet.add(arr[i]);
      }
    }
    return false;
  }
}

const giveArr = new Solution();
console.log(giveArr.hasDuplicate([1, 2, 3]));
