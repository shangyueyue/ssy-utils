// 引入
const obj = {
  name: 'shangyy',
  fn() {
    // console.log(this.name); // shangyy
  },
};
obj.fn();

/*
 * 实现一个apply
 */
/*
eslint-disable
 */
Function.prototype.apply1 = function(context, args) {
  context.fn = this;
  const res = context.fn(...args);
  return res;
};

const aObj = {
  name: 'shangyy',
  age: 18,
};

function afunc(name, age) {
  // console.log(this.name, this.age);
  this.name = name;
  this.age = age;
  // console.log(this.name, this.age);
}

afunc.apply1(aObj, ['huyating', 20]);


/*
 * 实现一个bind
 */

 Function.prototype.bind1 = function(context, ...args) {
    return  ()=>{
      this.apply(context,args );
    }
 }

 const bObj = {
  name: 'shangyy',
  age: 18,
};

function bfunc(name, age) {
  console.log(this.name, this.age);
  this.name = name;
  this.age = age;
  console.log(this.name, this.age);
}
bfunc.bind1(bObj, 'xiaoming', 18)();


