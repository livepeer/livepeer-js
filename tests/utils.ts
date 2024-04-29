/**
 * Utility function to compare the structures of two objects
 * @param {Object} obj1 - The first object to compare
 * @param {Object} obj2 - The second object to compare
 * @returns {boolean} Returns true if the structures of obj1 and obj2 are same, otherwise false.
 */

const compareResponseStructures = (obj1: any, obj2: any) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const type1 = typeof obj1[key];
    const type2 = typeof obj2[key];

    if (type1 !== type2 || !keys2.includes(key)) {
      return false;
    }
  }

  return true;
};

export { compareResponseStructures };
