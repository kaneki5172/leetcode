/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * Example:
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
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
 * @description 两两交换链表中的节点
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = head => {
  if (head === null || head.next === null) {
    return head;
  }

  const next = head.next;
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
};

/**
 * 递归（从后往前）
 * 重复的步骤，有结束条件
 * head -> next -> rest，交换head next 时候默认rest已经交换，然后对rest重复这个过程
 */