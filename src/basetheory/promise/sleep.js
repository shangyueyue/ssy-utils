function sleep(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`sleep ${time}`);
    }, time);
  });
}

async function func(t) {
  console.time('时间：');
  await sleep(t);
  console.timeEnd('时间：');
}
func(1000);

console.log('-------------------------');
