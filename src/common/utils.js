export const debounce = (func, delay) => {
  let inDebounce = null;
  return function () {
    clearTimeout(inDebounce);
    const args = arguments[0];
    inDebounce = setTimeout(function () {
      func(args);
    }, delay);
    return () => clearTimeout(inDebounce);
  }
}


export const isResultMatch = (row, keys, searchTerm) => {
  return keys.some((key) => {
    const check = row[key].toLowerCase();
    return check.includes(searchTerm.toLowerCase())
  });
};

export const filterListBySearchterm = (list, searchTerm, keysToCheck = []) => {
  if(list.length) {
    const keys = keysToCheck.length ? keysToCheck : Object.keys(list[0]);
    const filteredList = list.filter((item) => {
      return isResultMatch(item, keys, searchTerm);
    });
    return filteredList;
  }
  return [];
}

