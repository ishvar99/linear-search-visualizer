const LinearSearch = (searchTerms, searchElement, arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // traversing array linearly to find the element
    if (searchElement === arr[i]) {
      newArr.push({ index: i, traversed: false, result: true });
      break; // element found!
    } else if (searchTerms.includes(arr[i])) {
      // keeping track of already searched values!
      newArr.push({ index: i, traversed: true, result: true });
    } else {
      newArr.push({ index: i, traversed: true, result: false });
    }
  }
  return newArr;
};
export default LinearSearch;
