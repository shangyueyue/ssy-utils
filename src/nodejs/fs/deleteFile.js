const fs = require('fs');
const path = require('path');

// 删除文件
fs.unlink('src/assets/test.js', err => {
  if (err) {
    console.log(err);
  }
});

// 上传文件夹
fs.rmdir('src/assets/images', err => {
  if (err) {
    console.log(err);
  }
});

function deleteFiles(filePath) {
  if (!fs.existsSync(filePath)) return;
  if (fs.statSync(filePath).isFile()) {
    fs.unlinkSync(filePath);
    return;
  }
  if (fs.statSync(filePath).isDirectory()) {
    const files = fs.readdirSync(filePath);
    files.forEach(file => {
      console.log(`${filePath}/${file}`);
      deleteFiles(`${filePath}/${file}`);
    });
    fs.rmdirSync(filePath);
  }
}

function deleteall(filepath) {
  let files = [];
  if (fs.existsSync(filepath)) {
    files = fs.readdirSync(path);
    files.forEach(function(file) {
      const curPath = `${filepath}/${file}`;
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        deleteall(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

module.exports = {
  deleteFiles,
  deleteall,
};
