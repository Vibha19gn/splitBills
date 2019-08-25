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


export const isResultMatch = (searchTerm, values) => {
  return values.some((value) => {
    return value.includes(searchTerm.toLowerCase())
  });
};

export const autoSuggestList = (searchTerm, list) => {
  if (searchTerm.length > 2) {
    const filteredList = list.filter((item) => {
      const valuesToCheck = Object.values(item);
      return isResultMatch(searchTerm, valuesToCheck);
    });
    return filteredList;
  }
  return [];
}

