var slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    console.log(namespace + " " + slice.call(arguments, 0).join(" "));
  };
}

module.exports = logger;