/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        // 1. Save the next node before we overwrite the pointer
        let nextTemp = curr.next;
        
        // 2. Reverse the current node's pointer to face backward
        curr.next = prev;
        
        // 3. Move the pointers forward for the next iteration
        prev = curr;
        curr = nextTemp;
    }

    // After the loop, 'prev' will be the new head
    return prev;
};