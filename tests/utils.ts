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
