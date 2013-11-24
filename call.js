module.exports = function duckCount() {

  // start the intial count at zero
  var ducks = Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    if(Object.prototype.hasOwnProperty.call(curr, 'quack')) return ++prev;
    return prev;
  }, 0);

  return ducks;
};