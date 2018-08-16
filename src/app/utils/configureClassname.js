/**
 * 
 * @param {string} prefix
 * @param {object} config 
 * @returns {string}
 */
export const configureClassname = (prefix, config) => {
  if (config === void 0) {
    return (config) => {
      return configureClassname(prefix, config)
    };
  }

  const classnames = [];

  for (let key in config) {
    if (config.hasOwnProperty(key)) {
      if (config[key]) {
        classnames.push(`${prefix}_${key}`);
      }
    }
  }

  return classnames;
};

export default configureClassname;
