const LinearSearch = (searchElement, arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (searchElement == arr[i]) {
      newArr.push({ index: i, traversed: true, result: true });
      break;
    } else {
      newArr.push({ index: i, traversed: true, result: false });
    }
  }
  return newArr;
};
export default LinearSearch;
