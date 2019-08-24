 export const debounce = (func , delay) => {
   let inDebounce = null;
   return function() {
     clearTimeout(inDebounce);
     const args = arguments[0];
     inDebounce = setTimeout(function() {
       func(args);
     }, delay);
     return () => clearTimeout(inDebounce);
   }
 }


 export const isResultMatch = (searchTerm, values) => {
   return values.some((value) => {
     console.log("every==", value, searchTerm)
     return value.includes(searchTerm.toLowerCase())
   });
 };

 export const autoSuggestList = (searchTerm, list) => {
   if(searchTerm.length > 2) {
     console.log("searchTerm==", searchTerm, list)
     const filteredList = list.filter((item) => {
       const valuesToCheck = Object.values(item);
       console.log("finally", isResultMatch(searchTerm, valuesToCheck));
       return isResultMatch(searchTerm, valuesToCheck);
     });
     console.log("filteredList==", filteredList);
     return filteredList;
   }
  return [];
 }

