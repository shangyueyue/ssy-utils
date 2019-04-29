const fs = require('fs');
const path = require('path');

// 判断文件是否存在 exists vs stat
// 异步
fs.exists('src/assets/images/test.js', (err, exists) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(exists);
});

// // 同步
const exist = fs.existsSync('src/assets/images/test', err => {
  console.log(err);
});
console.log(exist);

// // 异步
fs.stat('src/assets/images/test.js', (err, stats) => {
  if (err) {
    console.log(err);
    console.log('文件不存在');
    return;
  }
  if (stats.isDirectory()) {
    console.log('目录存在');
  }
  if (stats.isFile()) {
    console.log('文件存在');
  }
});

// // 同步
const stats = fs.statSync('src/assets/images/test.js', err => {
  console.log(err, 111);
});
console.log(stats.isFile());
console.log(stats.isDirectory());

// 创建目录
// 异步---递归创建
fs.mkdir('src/assets/images', err => {
  if (err) {
    console.log(err);
  }
});

// fs.mkdirSync('src/assets/images',{recursive: true});

// 递归创建文件
function mkdirs(dirname, callback) {
  fs.exists(dirname, function(exists) {
    if (exists) {
      callback();
    } else {
      mkdirs(path.dirname(dirname), function() {
        fs.mkdir(dirname, callback);
      });
    }
  });
}

// mkdirs(filepath,()=>{})

// 递归创建目录 同步方法
function mkdirsSync(dirname) {
  // console.log(dirname);
  if (fs.existsSync(dirname)) {
    return true;
  } else if (mkdirsSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname);
    return true;
  }
}

module.exports = {
  mkdirs,
  mkdirsSync,
};
