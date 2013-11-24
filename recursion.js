// Assume we have initial value
// Implement array.reduce
// takes in an array that we work on
// a function that will operate on each successive value of the array
// the initial starting value (arr[0] or arr[-1]?) to perform against.

// Had to look at the solution, but was on the right track.
// What previous is supposed to be confuses me.

// Also, what the intermediate function was suppossed to receive,
// got it confused with what fn is supposed to receive.

// Also, I always seem to get the ++s in the wrong order

module.exports = function reduce(arr, fn, initial) {
  // So previous is not actually the val on the previous index
  // but the previously calculated value.
  // val is the result of performing function
  var reduceStep = function reduceStep(index, val) {
    if(index > arr.length - 1) return val;
    // fn.apply(null, [previous, current, index, array])
    val = fn.apply(null, [val, arr[index], index, arr]);

    return reduceStep(++index, val);
  };

  return reduceStep(0, initial);
};



// Solution:
// function reduce(arr, fn, initial) {
//   return (function reduceOne(index, value) {
//     if (index > arr.length - 1) return value
//     return reduceOne(index + 1, fn(value, arr[index], index, arr))
//   })(0, initial)
// }

// module.exports = reduce
