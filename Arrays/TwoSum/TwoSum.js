// Google's Two Sum problem

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that
 *  they add up to target.You may assume that each input would have exactly one solution,
 *  and you may not use the same element twice.You can return the answer in any order.
 */


/**
 * Test Cases:
 *  1]  [1,3,7,9,2]  t=11  ==> [3,4]
 *  2]  [1,3,7,9,2]  t=25  ==> null
 *  3]  []  t=1  ==> null
 *  4]  [5]  t=5  ==> null
 *  5]  [1,6]  t=7  ==> [0,1]
 */


 let twoSum = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const subtraction = target - element;
        for(let j = index + 1; j < nums.length; j++){
            if(subtraction === nums[j]){
                return [ index , j ]
            }
        }
    }
    return null;
};


console.log(twoSum([1,3,7,9,2] , 11));
console.log(twoSum([1,3,7,9,2] , 25));
console.log(twoSum([] , 11));
console.log(twoSum([5] , 5));
console.log(twoSum([1,6] , 7));