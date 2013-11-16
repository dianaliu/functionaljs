var doubleAll = function doubleAll(numbers) {
  return numbers.map(function(val, index, arr) {
    return val * 2;
  })
};

module.exports = doubleAll;