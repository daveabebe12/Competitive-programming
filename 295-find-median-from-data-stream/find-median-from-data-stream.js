class DataStreamHeap {
    constructor(compare) {
        this.data = [];
        this.compare = compare; // (a, b) => a - b for MinHeap, (a, b) => b - a for MaxHeap
    }

    push(val) {
        this.data.push(val);
        this.up(this.data.length - 1);
    }

    pop() {
        if (this.size() === 0) return null;
        const top = this.data[0];
        const bottom = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = bottom;
            this.down(0);
        }
        return top;
    }

    peek() {
        return this.data[0] !== undefined ? this.data[0] : null;
    }

    size() {
        return this.data.length;
    }

    up(i) {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.compare(this.data[i], this.data[p]) < 0) {
                [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
                i = p;
            } else {
                break;
            }
        }
    }

    down(i) {
        const len = this.data.length;
        while ((i << 1) + 1 < len) {
            let left = (i << 1) + 1;
            let right = left + 1;
            let best = left;

            if (right < len && this.compare(this.data[right], this.data[left]) < 0) {
                best = right;
            }
            if (this.compare(this.data[best], this.data[i]) < 0) {
                [this.data[i], this.data[best]] = [this.data[best], this.data[i]];
                i = best;
            } else {
                break;
            }
        }
    }
}

class MedianFinder {
    constructor() {
        // Max-heap to store the smaller half of numbers
        this.small = new DataStreamHeap((a, b) => b - a);
        // Min-heap to store the larger half of numbers
        this.large = new DataStreamHeap((a, b) => a - b);
    }

    /** 
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.small.push(num);
        this.large.push(this.small.pop());
        
        if (this.small.size() < this.large.size()) {
            this.small.push(this.large.pop());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.peek();
        }
        return (this.small.peek() + this.large.peek()) / 2;
    }
}