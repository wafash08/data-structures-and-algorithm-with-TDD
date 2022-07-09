import Node from "./node";

describe("Node", () => {
  describe("this.data", () => {
    test(`it should return 'a' when initialized with 'a'`, () => {
      const node = new Node("a");

      expect(node.data).toBe("a");
    });
  });

  describe("this.nextNode", () => {
    test(`it should return null when first initialized`, () => {
      const node = new Node("a");

      expect(node.nextNode).toBe(null);
    });

    test(`it should return b when initialized with a then b`, () => {
      const node = new Node("a");
      const node2 = new Node("b");

      node.nextNode = node2;

      expect(node.nextNode.data).toBe("b");
      expect(node2.nextNode).toBe(null);
    });
  });

  describe("this.prevNode", () => {
    test(`it should return null when first initialized`, () => {
      const node = new Node("a");

      expect(node.prevNode).toBe(null);
    });

    test(`it should return a when initialized with a then b`, () => {
      const node = new Node("a");
      const node2 = new Node("b");

      node.nextNode = node2;
      node2.prevNode = node;

      expect(node.nextNode.data).toBe("b");
      expect(node2.prevNode.data).toBe("a");
    });
  });
});
