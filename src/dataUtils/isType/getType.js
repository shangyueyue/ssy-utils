const isType = type => target => {
  return Object.prototype.toString.call(target) === `[object ${type}]`;
};

const isArray = isType('Array');
console.log(isArray([]));
const isObject = isType('Object');
console.log(isObject({}));
