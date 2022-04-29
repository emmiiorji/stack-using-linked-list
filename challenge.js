// Optionally: start with your code from LinkedList challenge.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(n) {
    const newNode = new Node(n);
    if (this.length === 0) {
      this.bottom = newNode;
      this.top = newNode;
    }
    else {
      const oldTopPointer = this.top;
      this.top = newNode;
      this.top.next = oldTopPointer;
    }
    this.length += 1;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const oldTopPointer = this.top;
    this.top = this.top.next;
    this.length -= 1;
    return oldTopPointer.val;
  }
}


const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.pop())
// => 5

stack.push(2)
stack.push(7)
console.log(stack.pop())
// => 7

console.log(stack.pop())
// => 2

console.log(stack.pop())
// => 3

module.exports = Stack
