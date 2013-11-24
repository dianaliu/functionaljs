module.exports = function repeat(operation, num) {
  var intervalID = setInterval(actuallyRepeat, 0);

  function actuallyRepeat() {
    if(--num >= 0) {
      operation();
    } else {
      clearInterval(intervalID);
      return;
    }
  }
};