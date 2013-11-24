module.exports = function arrayMap(arr, fn) {

  var mapped = arr.reduce(function(prev, curr, index, list) {
    prev.push(fn.apply(null, [curr]));
    return prev;
  }, []);

  return mapped;
};