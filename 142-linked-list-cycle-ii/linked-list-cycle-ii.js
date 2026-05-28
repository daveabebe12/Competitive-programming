/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) return null;
    
    let slow = head;
    let fast = head;
    
    // Phase 1: Determine if there is a cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        // Cycle detected
        if (slow === fast) {
            // Phase 2: Find the entry point of the cycle
            let entry = head;
            while (entry !== slow) {
                entry = entry.next;
                slow = slow.next;
            }
            return entry; // This is the start of the cycle
        }
    }
    
    return null; // No cycle found
};