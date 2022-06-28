const numbers = [2, 3, 4, 5, 6, 7, 8];

// const sum = (array) => {
//   let accumulatorFor = array[0];

//   for (let index = 1; index < array.length; index += 1) {
//     accumulatorFor = accumulatorFor + array[index];
//   }
//   return accumulatorFor;
// };

const sum = (array) => {
  return array.reduce((accumulator, currentValue) => {
    return accumulator;
  });
};

console.log(sum(numbers));

module.exports = { sum };
