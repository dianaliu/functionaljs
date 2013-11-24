// Target is the object
// method is the target.method that we actually want to spy on

// target = console object
// method = "error"

module.exports = function Spy(target, method) {
  var _this = this;
  var _method = target[method];
  this.count = 0;

  target[method] = function() {
    _this.count++;
    return _method.apply(this, arguments);
  }

  return this;
};
