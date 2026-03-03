class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        let res = new Array(n).fill(0);
        //we start from the end so that we can already know warmer days in the future
        // i at n-2 which is second last day from end beacuse there will be no warmer day after last day & our j will be last day
        // we compare last day and scecond last day if second last day is warmer than last day.
        for(let i=n-2; i>=0; i--){
            let j = i+1;
            while(j<n && temperatures[j]<=temperatures[i]){ 
                // if the day j is not warmer so we need to find a day which is warmer than i as we already know there if be some warmer day for j if it's not a last day.
                // then we can jump directly to that day as we store warmer day for j in res[j].

                if(res[j]===0){// if res[j] is o which means mostly j is last day or there is no warmer day for j so we can break the loop and assign res[i] as 0 because there is no warmer day for i as well.
                    j=n;
                    break;
                }
                j += res[j] 
            }

            if(j<n){
                res[i] = j-i;
            }
        }
        return res;
    }
}

// this has O(1) space and O(n) time complexity.
