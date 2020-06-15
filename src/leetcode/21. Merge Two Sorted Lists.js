/**
 * Merge two sorted linked lists and return it as a new list.
 * 将两个有序链表合并为一个新的有序链表并返回。
 * The new list should be made by splicing together the nodes of the first two lists.
 * 新链表是通过拼接给定的两个链表的所有节点组成的。
 * 
 * Example:
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @description 合并两个有序链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  const pHead = new ListNode(0);
  let curNode = pHead;

  while (l1 && l2) {
    const v1 = l1.val;
    const v2 = l2.val;
    let v = 0;
    if (v1 < v2) {
      l1 = l1.next;
      v = v1;
    } else {
      l2 = l2.next;
      v = v2;
    }
    const h = new ListNode(v);
    curNode.next = h;
    curNode = curNode.next;
  }
  while (l1) {
    const v1 = l1.val;
    const h = new ListNode(v1);
    curNode.next = h;
    curNode = curNode.next;
    l1 = l1.next;
  }
  while (l2) {
    const v2 = l2.val;
    const h = new ListNode(v2);
    curNode.next = h;
    curNode = curNode.next;
    l2 = l2.next;
  }
  return pHead.next;
};