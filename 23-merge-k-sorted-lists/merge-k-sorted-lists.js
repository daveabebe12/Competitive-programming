/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // Min-Heap implementation
    const heap = [];
    
    // Helper to push node into heap and bubble up
    const push = (node) => {
        heap.push(node);
        let index = heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (heap[parent].val <= heap[index].val) break;
            [heap[parent], heap[index]] = [heap[index], heap[parent]];
            index = parent;
        }
    };

    // Helper to pop min node and bubble down
    const pop = () => {
        if (heap.length === 0) return null;
        const min = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let index = 0;
            while (true) {
                let left = index * 2 + 1;
                let right = index * 2 + 2;
                let smallest = index;

                if (left < heap.length && heap[left].val < heap[smallest].val) smallest = left;
                if (right < heap.length && heap[right].val < heap[smallest].val) smallest = right;
                
                if (smallest === index) break;
                [heap[smallest], heap[index]] = [heap[index], heap[smallest]];
                index = smallest;
            }
        }
        return min;
    };

    // 1. Initial Fill: Add the head of each list to the heap
    for (let list of lists) {
        if (list) push(list);
    }

    // 2. Build the result list
    let dummy = new ListNode(0);
    let curr = dummy;

    while (heap.length > 0) {
        let node = pop();
        curr.next = node;
        curr = curr.next;
        
        // If there's a next node in the specific list, add it to the heap
        if (node.next) {
            push(node.next);
        }
    }

    return dummy.next;
};