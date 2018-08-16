/**
 * 
 * @param {object} target 
 * @param {string[]} keys 
 * @returns {string[]}
 */
export const getValuesByKeys = (target, keys) => {
  if (keys === void 0) {
    return (keys) => {
      return getValuesByKeys(target, keys);
    }
  }

  return keys.map((key) => {
    if (target.hasOwnProperty(key)) {
      return target[key];
    }
  });
}

export default getValuesByKeys;
