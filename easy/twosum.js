/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let total = [];
    for (let i = 0; i < nums.length; i++) { 
            if ((nums[i] + nums[i+1]) == target) { 
                total.push(i);
                total.push(i+1)
                break;
            } 
    }
    return total;
};

console.log(twoSum([2, 7, 11, 15], 9))