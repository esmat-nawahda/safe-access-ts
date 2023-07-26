import { safeGetProperty, safeSetProperty, safeDeleteProperty } from '../src';

describe("safe-access-ts", () => {
  let testObject = {
    level1: {
      level2: {
        level3: {
          value: "I'm here!"
        },
        array: [
          {
            index0: "First item"
          },
          {
            index1: "Second item"
          }
        ]
      }
    }
  };

  describe("safeGetProperty", () => {
    it("should return the value at the given path", () => {
      expect(safeGetProperty(testObject, 'level1.level2.level3.value')).toBe("I'm here!");
    });

    it("should return the default value when the target value is undefined", () => {
      expect(safeGetProperty(testObject, 'level1.level2.missing', "I'm default!")).toBe("I'm default!");
    });

    it("should handle array indices correctly", () => {
      expect(safeGetProperty(testObject, 'level1.level2.array[0].index0')).toBe("First item");
    });
  });

  describe("safeSetProperty", () => {
    it("should set the value at the given path", () => {
      safeSetProperty(testObject, 'level1.level2.newValue', "I'm new!");
      expect(safeGetProperty(testObject, 'level1.level2.newValue')).toBe("I'm new!");
    });
  });

  describe("safeDeleteProperty", () => {
    it("should delete the property at the given path", () => {
      safeDeleteProperty(testObject, 'level1.level2.level3');
      expect(safeGetProperty(testObject, 'level1.level2.level3.value', null)).toBeNull();
    });

    it("should handle array indices correctly", () => {
      safeDeleteProperty(testObject, 'level1.level2.array[0]');
      expect(safeGetProperty(testObject, 'level1.level2.array[0].index0', null)).toBe("First item");
    });
  });
});