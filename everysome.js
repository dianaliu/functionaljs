module.exports = function checkValidUsers(goodUsers) {
  var goodIds = goodUsers.map(function(val) { return val.id; });

  return function(submittedUsers) {
    return submittedUsers.every(function(val, index, arr) {
      return goodIds.indexOf(val.id) >= 0;
    });
  }
};