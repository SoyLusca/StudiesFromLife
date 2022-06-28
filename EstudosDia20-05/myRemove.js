myRemove = (arr, item) => {
  const arrayFiltrado = [];
  for (let element of arr) {
    if (element !== item) {
      arrayFiltrado.push(element);
    }
  }
  return arrayFiltrado;
};
console.log(myRemove([1, 2, 3, 4], 2));
module.exports = myRemove;
