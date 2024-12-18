var addTwoNumbers = function(l1, l2) {
    const result = new ListNode();
    let tail = result;
    let carry = 0;
  
    while (l1 || l2 || carry) {
      const v1 = l1 ? l1.val : 0;
      const v2 = l2 ? l2.val : 0;
      const v = v1 + v2 + carry;
  
      tail.next = new ListNode(v % 10);
      tail = tail.next;
      carry = v >= 10 ? 1 : 0;
      l1 = l1 && l1.next;
      l2 = l2 && l2.next;
    }
  
    return result.next;
  };