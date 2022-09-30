/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    if (head === null) return {};
    let count = 1;
    let currentNode = head;
    while (currentNode.next !== null){
        currentNode = currentNode.next;
        count++;
    }
    currentNode = head;
    let middleIndex = 0;
    if(count%2 === 0) middleIndex = (count/2)+1;
    else middleIndex = Math.ceil(count/2);
    count = 1;
    while (currentNode.next !== null){
        if (count === middleIndex) return currentNode;
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
};

console.log(middleNode({val:1,next:null}))
console.log(middleNode({val:1,next:{val:2, next: null}}))
console.log(middleNode({val:1,next:{val:2, next: {val:3, next:{ val: 4, next:{val:5, next:null}}}}}))
console.log(middleNode({val:1,next:{val:2, next: {val:3, next:{ val: 4, next:{val:5, next:{val:6, next:null}}}}}}))