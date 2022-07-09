import Node from "./node";

export default class LinkedList {
  constructor() {
    this.headNode = null;
    this.length = 0;
  }

  insertFirst(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
    this.length++;
  }

  insertLast(value) {
    if (!this.headNode) return this.insertFirst(value);

    let currentNode = this.headNode;

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    const newNode = new Node(value);
    currentNode.nextNode = newNode;
    this.length++;
    return this.length;
  }

  insertAt(value, index) {
    if (index > this.length || index < 0) {
      throw new RangeError("Out of range index");
    }
    if (index === 0) return this.insertFirst(value);
    if (index === this.length) return this.insertLast(value);

    let currentNode = this.headNode;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    const newNode = new Node(value);
    const tempNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
    newNode.nextNode = tempNode;
    this.length++;
    return this.length;
  }

  readHead() {
    return this.headNode?.data || null;
  }

  readTail() {
    let currentIndex = 0;
    let currentNode = this.headNode;

    while (currentIndex < this.length - 1) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return currentNode.data;
  }

  readAt(index) {
    let currentIndex = 0;
    let currentNode = this.headNode;

    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return currentNode.data;
  }

  indexOf(value) {
    let currentIndex = 0;
    let currentNode = this.headNode;

    while (currentNode) {
      if (currentNode.data === value) {
        return currentIndex;
      }

      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return null;
  }

  deleteHead() {
    const removedNode = this.headNode;
    if (this.length > 0) {
      this.headNode = this.headNode.nextNode;
      this.length--;
    }
    return removedNode?.data;
  }

  deleteTail() {
    let currentIndex = 0;
    let currentNode = this.headNode;

    while (currentIndex < this.length - 2) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    const removedNode = currentNode.nextNode;
    currentNode.next = null;
    this.length--;
    return removedNode.data;
  }

  deleteAt(index) {
    if (index === 0) return this.deleteHead();

    if (index === this.length) return this.deleteTail();

    let currentIndex = 0;
    let currentNode = this.headNode;

    while (currentIndex < index - 1) {
      currentNode = currentNode.nextNode;

      currentIndex++;
    }

    let removedNode = currentNode.nextNode;
    let nodeAfterDeletedNode = currentNode.nextNode.nextNode;

    currentNode.nextNode = nodeAfterDeletedNode;
    this.length--;
    return removedNode.data;
  }

  delete(value) {
    let currentNode = this.headNode;
    let removedNode = null;

    if (currentNode.data === value) return this.deleteHead();

    while (currentNode?.nextNode) {
      if (currentNode.nextNode.data === value) {
        removedNode = currentNode.nextNode;
        currentNode.nextNode = currentNode.nextNode.nextNode;
        this.length--;
        break;
      }

      currentNode = currentNode.nextNode;
    }

    return removedNode?.data || null;
  }
}
