(function () {
  const dataType = {
    '[object Null]': 'null',
    '[object Undefined]': 'undefiend',
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regexp',
    '[object Object]': 'object',
    '[object Error]': 'error',
  };
  for (const p in dataType) {
    const objType = p.slice(8, -1);
    window[`is${objType}`] = function (obj) {
      return dataType[Object.prototype.toString.call(obj)] === objType.toLowerCase();
    };
  }
}());
