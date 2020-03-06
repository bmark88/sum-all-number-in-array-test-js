function sumItems(array) {
  total = 0;
  for (let i in array) {
    if (Array.isArray(array[i])) {
      total += sumItems(array[i]);
    } else {
      total += array[i];
    }
  }

  return total;
}

// console.log(sumItems([1, 2, 3, 4, 5]));
// console.log(sumItems([[1, 2, [[3], 4]], 5, []]));
// console.log(sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]));

module.exports = sumItems;