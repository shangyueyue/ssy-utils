Promise.myall = function(ps) {
  return new Promise((resolve, reject) => {
    const result = [];
    let index = 0;
    for (let i = 0; i < ps.length; i++) {
      Promise.resolve(ps[i]).then(
        data => { // eslint-disable-line
          result[i] = data;
          index++;
          if (index === ps.length) {
            resolve(result);
          }
        },
        e => {
          reject(e);
        }
      );
    }
  });
};

const p1 = Promise.resolve(1);
const p2 = new Promise(resolve => {
  setTimeout(() => {
    resolve(2);
  });
});
const p3 = Promise.resolve(1);
Promise.myall([p1, p2, p3]).then(result => {
  console.log(result);
});
