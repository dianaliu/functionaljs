// Higher order function takes or returns a function

var repeat = function repeat(operation, num) {
  if(0 == num) return;

  operation.apply(null);
  return repeat(operation, --num);

};

module.exports = repeat;