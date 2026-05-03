/**
 * Node class for the Doubly Linked List
 */
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // Stores key -> Node reference
    
    // Dummy head and tail to avoid null checks during insertion/deletion
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        const node = this.map.get(key);
        this._remove(node);
        this._add(node); // Move to head (most recently used)
        return node.value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this._remove(this.map.get(key));
    }
    
    const newNode = new Node(key, value);
    this.map.set(key, newNode);
    this._add(newNode);
    
    if (this.map.size > this.capacity) {
        const lruNode = this.tail.prev;
        this._remove(lruNode);
        this.map.delete(lruNode.key);
    }
};

/**
 * Helper: Adds node to the front (right after head)
 */
LRUCache.prototype._add = function(node) {
    const nextNode = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = nextNode;
    nextNode.prev = node;
};

/**
 * Helper: Removes node from its current position
 */
LRUCache.prototype._remove = function(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
};