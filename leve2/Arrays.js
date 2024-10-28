class Stack {
    constructor() {
        this.array = [];
    }
    append(data) {
        this.array.push(data);
    }
    display() {
        console.log(this.array);
    }
    peek() {
        console.log(this.array[this.array.length - 1]);
    }
    remove() {
        this.array.pop();
    }
}

const myStack = new Stack();
myStack.append(5);
myStack.append(1);
myStack.append(9);
myStack.append(8);
myStack.remove();
myStack.peek();
myStack.display();
