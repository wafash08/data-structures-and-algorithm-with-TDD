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

    it("should throw an error message 'Out of range index' when reading data at out of range index", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");
      expect(() => {
        linkedList.readAt(1);
      }).toThrow(RangeError);
      expect(() => {
        linkedList.readAt(1);
      }).toThrow("Out of range index");
    });
  });

  describe("this.indexOf", () => {
    it("should return index 0 when searching 'a'", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");

      expect(linkedList.indexOf("a")).toBe(0);
    });

    it("should return index 1 when searching 'b'", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");
      linkedList.insertAt("b", 1);

      expect(linkedList.indexOf("b")).toBe(1);
    });

    it("should return undefined when searching element that does not exist", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");
      linkedList.insertAt("b", 1);

      expect(linkedList.indexOf("w")).toBe(null);
    });
  });

  describe("this.delete", () => {
    it("should return 'a' when deleting 'a'", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");

      expect(linkedList.deleteHead()).toBe("a");
    });

    it("should return 'b' when deleting 'b'", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");
      linkedList.insertLast("b");

      expect(linkedList.deleteTail()).toBe("b");
    });

    it("should return 'b' and read index 1 to be 'c' when deleting 'b'", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");
      linkedList.insertAt("b", 1);
      linkedList.insertLast("c");

      expect(linkedList.deleteAt(1)).toBe("b");
      expect(linkedList.readAt(1)).toBe("c");
      expect(linkedList.length).toBe(2);
    });

    it("should throw an error message 'Out of range index' when deleting data at out of range index", () => {
      const linkedList = new LinkedList();
      linkedList.insertAt("w", 0);
      expect(() => {
        linkedList.deleteAt(2);
      }).toThrow(RangeError);
      expect(() => {
        linkedList.deleteAt(2);
      }).toThrow("Out of range index");
    });

    it("should return null when deleting 'w'", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");
      linkedList.insertAt("b", 1);
      linkedList.insertLast("c");

      expect(linkedList.delete("w")).toBe(null);
      expect(linkedList.readAt(1)).toBe("b");
      expect(linkedList.length).toBe(3);
    });

    it("should return 'b' when deleting 'b'", () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst("a");
      linkedList.insertAt("b", 1);
      linkedList.insertLast("c");

      expect(linkedList.delete("b")).toBe("b");
      expect(linkedList.readAt(1)).toBe("c");
      expect(linkedList.length).toBe(2);
    });
  });
});
