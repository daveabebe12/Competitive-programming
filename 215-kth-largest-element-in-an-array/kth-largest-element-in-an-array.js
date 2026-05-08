/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // Define the Heap logic inside or as a local class to avoid global conflicts
    class Heap {
        constructor() {
            this.data = [];
        }
        push(val) {
            this.data.push(val);
            this.bubbleUp(this.data.length - 1);
        }
        pop() {
            if (this.size() === 0) return null;
            const top = this.data[0];
            const bottom = this.data.pop();
            if (this.size() > 0) {
                this.data[0] = bottom;
                this.bubbleDown(0);
            }
            return top;
        }
        bubbleUp(index) {
            while (index > 0) {
                let parent = Math.floor((index - 1) / 2);
                if (this.data[index] < this.data[parent]) {
                    [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
                    index = parent;
                } else break;
            }
        }
        bubbleDown(index) {
            while (true) {
                let left = 2 * index + 1;
                let right = 2 * index + 2;
                let smallest = index;
                if (left < this.data.length && this.data[left] < this.data[smallest]) smallest = left;
                if (right < this.data.length && this.data[right] < this.data[smallest]) smallest = right;
                if (smallest !== index) {
                    [this.data[index], this.data[smallest]] = [this.data[smallest], this.data[index]];
                    index = smallest;
                } else break;
            }
        }
        size() { return this.data.length; }
        peek() { return this.data[0]; }
    }

    const minHeap = new Heap();

    for (let n of nums) {
        minHeap.push(n);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }

    return minHeap.peek();
};