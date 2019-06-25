// async 返回值 promise
async function test1() {}
test1();
async function test2() {
  try {
    const result = await 1;
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
}
test2();
