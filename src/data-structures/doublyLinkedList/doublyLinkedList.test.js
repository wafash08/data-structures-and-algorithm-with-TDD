import DoublyLinkedList from "./doublyLinkedList";

describe("Doubly Linkedlist", () => {
  describe("constructor", () => {
    it("should have headNode and tailNode to be null and the length is 0 when first instantiated", () => {
      const doublyLinkedList = new DoublyLinkedList();

      expect(doublyLinkedList.length).toBe(0);
      expect(doublyLinkedList.headNode).toBe(null);
      expect(doublyLinkedList.tailNode).toBe(null);
    });
  });

  describe("append", () => {
    it("should have headNode and tailNode to be 'a' and the length is 1 when firstly initialized with a", () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.append("a");

      expect(doublyLinkedList.length).toBe(1);
      expect(doublyLinkedList.headNode.data).toBe("a");
      expect(doublyLinkedList.tailNode.data).toBe("a");
    });

    it("should have headNode to be 'a' and tailNode to be 'b' and the length is 2 when initialized with 'a' then 'b'", () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.append("a");
      doublyLinkedList.append("b");

      expect(doublyLinkedList.length).toBe(2);
      expect(doublyLinkedList.headNode.data).toBe("a");
      expect(doublyLinkedList.tailNode.data).toBe("b");
    });
  });
});
