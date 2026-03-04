/* You are given an array of strings strs. Return the longest common prefix of all the strings.

If there is no longest common prefix, return an empty string "".

Example 1:

Input: strs = ["bat","bag","bank","band"]

Output: "ba"
Example 2:

Input: strs = ["dance","dag","danger","damage"]

Output: "da" */

class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0]; // we take first element of the array as the prefix
        for(let i=1; i<strs.length; i++){ //then we start from the second element and compare it with the prefix
            while(strs[i].indexOf(prefix) !==0){//we start from second element and check if the prefix is present in the current string or not, if it is not present then we remove the last character from the prefix and check again until we find the common prefix or we have removed all the characters from the prefix.
                prefix = prefix.slice(0, prefix.length-1)
            }
        }
        return prefix;
    }
}
