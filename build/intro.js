// library wrapper intro
(function (root, factory) {
  if (typeof define === 'function') {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    // the globally available library variable
    root.soul = factory();
  }
}(this, function () {