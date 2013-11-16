module.exports = function countWords(input) {

  return input.reduce(function(prev, val) {
    prev[val] = ++prev[val] || 1;
    return prev;
  }, {});
};