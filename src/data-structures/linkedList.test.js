import LinkedList from "./linkedList.js";

describe("Linked List", () => {
  describe("this.headNode", () => {
    it("should return null when first initialized", () => {
      const linkedList = new LinkedList();

      expect(linkedList.headNode).toBe(null);
    });
  });

  describe("this.length", () => {
    it("should return 0 when first initialized", () => {
      const linkedList = new LinkedList();

      expect(linkedList.length).toBe(0);
    });
  });

  describe("this.insertFirst", () => {
    it("should add 'a' to headNode when length of the linkedList is 0", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");
      expect(linkedList.headNode.data).toBe("a");
      expect(linkedList.length).toBe(1);
    });
  });

  describe("this.insertLast", () => {
    it("should add 'b' to last node and increment the length", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");
      linkedList.insertLast("b");
      expect(linkedList.headNode.data).toBe("a");
      expect(linkedList.length).toBe(2);
    });
  });

  describe("this.insertAt", () => {
    it("should add 'c' to index 1", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");
      linkedList.insertAt("c", 1);
      linkedList.insertLast("b");
      expect(linkedList.headNode.data).toBe("a");
      expect(linkedList.length).toBe(3);
    });
    it("should add 'd' to index 3", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");
      linkedList.insertAt("c", 1);
      linkedList.insertLast("b");
      linkedList.insertAt("b", 3);
      expect(linkedList.headNode.data).toBe("a");
      expect(linkedList.length).toBe(4);
    });
    it("should add 'w' to index 0", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");
      linkedList.insertAt("w", 0);
      linkedList.insertLast("b");
      expect(linkedList.headNode.data).toBe("w");
      expect(linkedList.length).toBe(3);
    });

    it("should throw an error message 'Out of range index' when adding data at out of range index", () => {
      const linkedList = new LinkedList();
      linkedList.insertAt("w", 0);
      expect(() => {
        linkedList.insertAt("a", 2);
      }).toThrow(RangeError);
      expect(() => {
        linkedList.insertAt("a", 2);
      }).toThrow("Out of range index");
    });
  });

  describe("this.read", () => {
    it("should return 'a' when reading headNode", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");

      expect(linkedList.readHead()).toBe("a");
    });

    it("should return 'c' when reading last node", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");
      linkedList.insertAt("b", 1);
      linkedList.insertLast("c");

      expect(linkedList.readTail()).toBe("c");
    });

    it("should return 'b' when reading index 1", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");
      linkedList.insertAt("b", 1);
      linkedList.insertLast("c");

      expect(linkedList.readAt(1)).toBe("b");
    });
  });

  // describe("this.head", () => {
  //   it("should return null when reading head of newly initialized linkedlist", () => {
  //     const linkedList = new LinkedList();

  //     expect(linkedList.head()).toBe(null);
  //   });
  // });

  // describe("this.append", () => {
  //   it("should add data to the head of empty linkedlist", () => {
  //     const linkedList = new LinkedList();
  //     linkedList.append("a");

  //     expect(linkedList.head()).toBe("a");
  //   });

  //   it("should add data to the last of existing linkedlist", () => {
  //     const linkedList = new LinkedList();
  //     linkedList.append("a");
  //     linkedList.append("b");

  //     expect(linkedList.head()).toBe("a");
  //     expect(linkedList.size()).toBe(2);
  //   });
  // });

  // describe("this.size", () => {
  //   it("should return the length of linkedlist", () => {
  //     const linkedList = new LinkedList();
  //     linkedList.append("a");

  //     expect(linkedList.size()).toBe(1);
  //   });
  // });
});
