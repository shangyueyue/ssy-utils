const mp = new Map();
const person = { name: 'shangyy', age: 18 };
mp.set(person, 'hello world');
mp.set('height', 180);
console.log(mp);
const a = mp.get(person);
console.log(a);
console.log(mp.has(person));
// mp.clear();
console.log(mp.size);
console.log(mp.keys());
console.log([...mp]);
console.log('-------------------');

const info = [['name', 'shangyy'], ['age', 18], ['height', 177], ['weight', 130]];

const actions = () => {
  return new Map(info);
};

console.log(actions());
[...actions()].forEach(([key, value]) => {
  console.log(key, value);
});
