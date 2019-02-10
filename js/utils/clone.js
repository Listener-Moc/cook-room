Object.prototype.clone = function () {
  const o = this.constructor === Array ? [] : {};
  for (const key in this) { // 会枚举原型上的可枚举属性
    // 避免来自原型扩展上的属性
    if (!this.hasOwnProperty(key)) continue;
    o[key] = typeof this[key] === 'object' ? this[key].clone() : this[key];
  }
  return o;
};

const a = { a: { a: 1, b: [1, 1] } };
const b = a.clone();
console.log(b);
