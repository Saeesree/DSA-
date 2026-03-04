class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        const n = heights.length;
        let stack = [];

        for(let i=0; i<=n; i++){
            while(stack.length>0 && (i===n||heights[stack[stack.length-1]]>= heights[i])){
                //i===n is for the case when we have reached the end of the array and we need to pop all the remaining elements in the stack to calculate the area.
                const height = heights[stack.pop()];
                const width = stack.length === 0?i:i-stack[stack.length-1]-1;
                //why -1 because we need to exclude the current element which is smaller than the height of the rectangle we are calculating.
                maxArea = Math.max(maxArea, height*width);
            }
            stack.push(i)
        }
        return maxArea;
    }
}
