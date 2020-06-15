/**
 * Given a linked list, remove the n-th node from the end of list and return its head.
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * Example:
 * Given linked list: 1->2->3->4->5, and n = 2.
 * After removing the second node from the end, the linked list becomes 1->2->3->5.
 */

/**
 * Definition for singly-linked list.
 */
class ListNode  {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let phead = new ListNode(0);
  phead.next = head;
  
  let tail = phead;
  let current = phead;

  while(tail.next && n > 0) {
    tail = tail.next;
    n--;
  }

  while(tail.next) {
    tail = tail.next;
    current = current.next;
  }
  current.next = current.next.next;
  return phead.next;
};

/**
 * 链表问题优先考虑双指针
 * 尾指针先移动n个位置，这样当尾指针到链表末尾的时候，头指针后面的那个就是需要删除的。
 * 例如，倒数2个位置  1 -> 3 -> 5 -> 7 -> 8
 * head：1，tail：5
 * move
 * head：5，tail：8
 * 
 * 例如，倒数1个位置  1 -> 3 -> 5 -> 7 -> 8
 * head：1，tail：3
 * move
 * head：7，tail：8
 */