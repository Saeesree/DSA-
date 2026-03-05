/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0,head);
        let groupPrev = dummy;

        while(true){
            let kth = this.getKth(groupPrev, k)
            if(!kth) break;

            let groupNext = kth.next;
            
            let prev = kth.next;
            let curr = groupPrev.next
            while(curr!==groupNext){
                let temp = curr.next;
                curr.next = prev
                prev = curr;
                curr = temp
            }
            let temp = groupPrev.next;// we store the current group head in temp variable because after reversing the group it will become the tail of the group and we need to connect it with the next group.
            groupPrev.next = kth;// we connect the previous group with the current group head which is kth node.
            groupPrev = temp
        }
        return dummy.next
    }

    getKth(curr,k){
        while(curr && k>0){
            curr = curr.next;
            k--
        }
        return curr;
    }
}
