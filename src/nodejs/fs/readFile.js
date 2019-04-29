const fs = require('fs');
const path = require('path');

// 异步读取
// 'e:\ssy-node\ssy-node-koa\assets\test.js' 路径是相对process.cwd()
fs.readFile(path.resolve(__dirname, 'assets/test.js'), (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data); // buffer
  console.log(data.toString());
});

// 同步读取

const testFile = fs.readFileSync('src/assets/test.js', err => {
  console.log(err);
});

console.log(testFile.toString());
