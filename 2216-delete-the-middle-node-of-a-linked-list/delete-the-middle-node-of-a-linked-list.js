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
var deleteMiddle = function(head) {
    // Edge case: If there's only one node, deleting it returns an empty list.
    if (!head || !head.next) {
        return null;
    }
    
    // Initialize pointers. 
    // Starting 'fast' at head.next.next ensures 'slow' stops exactly 
    // one node BEFORE the middle node.
    let slow = head;
    let fast = head.next.next;
    
    // Move fast by 2 steps and slow by 1 step
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // slow is now right before the middle node. Skip the middle node.
    slow.next = slow.next.next;
    
    return head;
};