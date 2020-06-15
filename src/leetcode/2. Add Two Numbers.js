/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @description 链表相加
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const pHead = new ListNode('pHead');
  let curNode = pHead;
  let carry = 0;
  while (l1 && l2) {
    const val1 = l1.val;
    const val2 = l2.val;
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    curNode.next = new ListNode(sum % 10);
    curNode = curNode.next; 
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1) {
    const sum = l1.val + carry;
    carry = Math.floor(sum / 10);
    curNode.next = new ListNode(sum % 10);
    curNode = curNode.next; 
    l1 = l1.next;
  }
  while (l2) {
    const sum = l2.val + carry;
    carry = Math.floor(sum / 10);
    curNode.next = new ListNode(sum % 10);
    curNode = curNode.next; 
    l2 = l2.next;
  }
  if (carry === 1) {
    curNode.next = new ListNode(carry);
  }
  return pHead.next;
};

/**
 * 链表相加：
 * 1、每一位数字相加，注意大于10时候进位，链表合并完之后需要判断进位是否追加
 * 2、注意某个链表到末尾为空了
 * 3、链表问题都可以用一个pHead节点指向头节点，currentNode节点指向当前节点
 * 4、l1 和 l2 判断可以合并用 l1 || l2。这个写法简洁一点，但是两个链表长度差距较大则慢一些
 */