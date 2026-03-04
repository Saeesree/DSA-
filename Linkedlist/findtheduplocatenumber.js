/* You are given an array of integers nums containing n + 1 integers. Each integer in nums is in the range [1, n] inclusive.

Every integer appears exactly once, except for one integer which appears two or more times. Return the integer that appears more than once.

Example 1:

Input: nums = [1,2,3,2,2]

Output: 2
Example 2:

Input: nums = [1,2,3,4,4]

Output: 4
Follow-up: Can you solve the problem without modifying the array nums and using 
O
(
1
)
O(1) extra space?

Constraints:

1 <= n <= 10000
nums.length == n + 1
1 <= nums[i] <= n
 */

/* //in the given range of numbers we can apply binary search to find the duplicate number. 
// We will count how many numbers are less than or equal to the mid value. 
// If the count is less than or equal to mid, then the duplicate number must be in the right half of the range, 
// otherwise it must be in the left half. We will continue this process until we find the duplicate number. 
// This approach has a time complexity of O(n log n) and a space complexity of O(1). */
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const n = nums.length;//lenght of array
        let l = 1; // as the range falls between 1 to n-1 so considered l as 1
        let r = n-1; // as max length is n and  given numbes fall in range 1 to n-1 so considered r as n-1
        while(l<r){
            let mid = Math.floor((l+r)/2);// this is mid of the range of numbers not the mid of the array
            let count = 0;

            for(let i=0; i<n; i++){// check every number and if the number is less than or equal to mid then count it
                if(nums[i]<=mid){
                    count++;
                }
            }

            if(count<=mid){
                l = mid+1;
            }else{
                r = mid;
            }
        }
        return l;
    }
}
