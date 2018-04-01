(function () {
	let dataType = {
    '[object Null]' : 'null',
    '[object Undefined]' : 'undefiend',
    '[object Boolean]' : 'boolean',
    '[object Number]' : 'number',
    '[object String]' : 'string',
    '[object Function]' : 'function',
    '[object Array]' : 'array',
    '[object Date]' : 'date',
    '[object RegExp]' : 'regexp',
    '[object Object]' : 'object',
    '[object Error]' : 'error'
  };
  for(let p in dataType) {
    let objType = p.slice(8, -1);
    window['is' + objType] = function(obj) {
      return dataType[Object.prototype.toString.call(obj)] === objType.toLowerCase();
    }
  }
})();