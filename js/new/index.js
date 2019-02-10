function New() {
  const constructorFunc = [].shift.call(arguments);
  const instance = Object.create(constructorFunc.prototype);
  constructorFunc.apply(instance, arguments);
  return instance;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const unit = New(Person, '某某某', 21);

console.info(unit);
