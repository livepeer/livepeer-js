/**
 * Utility function to compare the structures of two objects with case-insensitive key comparisons
 * @param obj1 - The first object to compare
 * @param obj2 - The second object to compare
 * @returns Returns true if the structures of obj1 and obj2 are the same, otherwise false.
 */

const compareResponseStructures = (obj1: any, obj2: any): boolean => {
  const keys1 = Object.keys(obj1).map((key) => key.toLowerCase());
  const keys2 = Object.keys(obj2).map((key) => key.toLowerCase());

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    const originalKey1 = Object.keys(obj1).find((k) => k.toLowerCase() === key);
    const originalKey2 = Object.keys(obj2).find((k) => k.toLowerCase() === key);
    if (!originalKey1 || !originalKey2) {
      return false;
    }

    const type1 = typeof obj1[originalKey1];
    const type2 = typeof obj2[originalKey2];

    if (type1 !== type2) {
      return false;
    }
  }

  return true;
};

export { compareResponseStructures };
