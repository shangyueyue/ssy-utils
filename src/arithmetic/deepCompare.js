// 深度比较

function deepCompare(a, b) {
  if (a === null || typeof a !== 'object' || a === null || typeof a !== 'object') {
    return a === b;
  }
  const propsA = Object.getOwnPropertyDescriptors(a);
  const propsB = Object.getOwnPropertyDescriptors(b);
  if (Object.keys(propsA).length !== Object.keys(propsB).length) return false;
  return Object.keys(propsA).every(key => deepCompare(a[key], b[key]));
}

const dataA = {
  name: 'shangyy',
  age: 18,
};
const dataB = {
  name: 'shangy',
  age: 18,
};

const result = deepCompare(dataA, dataB);
console.log(result);

