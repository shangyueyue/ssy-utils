const fs = require('fs');

fs.stat('src/assets/test.js', (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(stats);
  // 获取文件的大小；
  console.log(stats.size);
  // 获取文件最后一次访问的时间；
  console.log(stats.atime.toLocaleString());
  // 文件创建的时间；
  console.log(stats.birthtime.toLocaleString());
  // 文件最后一次修改时间；
  console.log(stats.mtime.toLocaleString());
  // 状态发生变化的时间；
  console.log(stats.ctime.toLocaleString());
  // b判断是否是目录；是返回true；不是返回false；
  console.log(stats.isFile());
  // 判断是否是文件；是返回true、不是返回false；
  console.log(stats.isDirectory());
});

// Stats {
//   dev: 437501521,
//   mode: 33206,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: undefined,
//   ino: 844424930792424,
//   size: 27,
//   blocks: undefined,
//   atimeMs: 1556504641133.9697,
//   mtimeMs: 1556505578143.9104,
//   ctimeMs: 1556505578143.9104,
//   birthtimeMs: 1556504641133.9697,
//   atime: 2019-04-29T02:24:01.134Z,
//   mtime: 2019-04-29T02:39:38.144Z,
//   ctime: 2019-04-29T02:39:38.144Z,
//   birthtime: 2019-04-29T02:24:01.134Z
// }
