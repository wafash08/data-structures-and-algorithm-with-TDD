import Node from "./node";

export default class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.headNode = null;
    this.tailNode = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      newNode.prevNode = this.tailNode;
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    }

    this.length++;
  }
}
