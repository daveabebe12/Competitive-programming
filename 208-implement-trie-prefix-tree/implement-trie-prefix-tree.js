class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        const node = this._traverse(word);
        return node !== null && node.isEndOfWord;
    }

    startsWith(prefix) {
        return this._traverse(prefix) !== null;
    }

    // Helper to avoid repeating logic
    _traverse(str) {
        let node = this.root;
        for (const char of str) {
            if (!node.children[char]) return null;
            node = node.children[char];
        }
        return node;
    }
}