class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pairs = position.map((p,i)=>[p, speed[i]]);
        // array.map((element, index, array) => { ... })
        // Since position and speed are parallel arrays (same length, same index = same car), using i to index into speed correctly pairs each car's position with its speed.
        pairs.sort((a,b)=> b[0]-a[0]);
        let stack = [];
        for(let [p,s] of pairs){
            stack.push((target-p)/s)

            if(
                stack.length>=2 && 
                stack[stack.length-1]<=stack[stack.length-2]
            ){
                stack.pop();
            }
        }
        return stack.length;
    }
}
