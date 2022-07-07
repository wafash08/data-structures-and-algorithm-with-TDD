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

  // head() {
  //   return this.headNode?.data || null;
  // }

  // append(data) {
  //   if (this.headNode === null) {
  //     this.headNode = new Node(data);
  //   }

  //   this.length++;
  // }

  // size() {
  //   return this.length;
  // }
}
