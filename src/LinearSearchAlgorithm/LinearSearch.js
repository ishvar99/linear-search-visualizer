const LinearSearch = (searchElement, arr) => {
  for (let i = 0; i < arr.length; i++) if (searchElement == arr[i]) return i;
  return -1;
};

export default LinearSearch;
