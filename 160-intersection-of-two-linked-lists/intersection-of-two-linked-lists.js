/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let pA = headA;
    let pB = headB;

    // The loop terminates when pA and pB point to the same node.
    // That node is either the intersection or both are null.
    while (pA !== pB) {
        // If pA reaches the end, switch to headB; otherwise, move to next.
        pA = (pA === null) ? headB : pA.next;
        
        // If pB reaches the end, switch to headA; otherwise, move to next.
        pB = (pB === null) ? headA : pB.next;
    }

    return pA;
};