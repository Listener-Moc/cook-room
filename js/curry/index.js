function curry(fn) {
  const args = Array.prototype.slice.call(arguments, 1);
  return function () {
    const innerArgs = Array.prototype.slice.call(arguments);
    const allArgs = innerArgs.concat(args);
    return fn.apply(null, allArgs);
  };
}