class Solution {
  hasDuplicate(nums) {
    const seen = new Set();

    for (const num of nums) {
      if (seen.has(num)) {
        return true;
      }
      console.log(num, nums);
      seen.add(num);
    }

    return false;
  }
}

const solution = new Solution();

console.log(solution.hasDuplicate([1, 2, 3, 3]));
console.log(solution.hasDuplicate([1, 2, 3, 4]));
