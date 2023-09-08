//Leetcode problem no: 2
// You have given reversed numbers within linked lists.
// You're expected to return reversed sum of this numbers.
// l1 = [2, 4, 3] l2 = [5, 6, 4] output = [7, 0, 8]
// l1 = [0] l2 = [0] output =[0]
// l1 = [9, 9, 9, 9, 9, 9, 9] l2 = [9, 9, 9, 9] output = [8, 9, 9, 9, 0, 0, 0, 1]
// Example third is very complex and great! l1 or l2 can hold null variables and you have to handle them!
// Having in_hand for 5 + 7 = 12 then in_hand = 1 and first letter is 2. Gothca?

//Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return null;
};

console.log("Worked!");