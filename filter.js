module.exports = function getShortMessages(messages) {
  return messages.filter(function(val, index, arr) {
    return val.message.length < 50;
  }).map(function(val, index, arr) {
    return val.message;
  });
};