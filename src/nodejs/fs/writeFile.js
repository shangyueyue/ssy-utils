const fs = require('fs');

const code = 'hello fs writeFile test \n';
fs.writeFile('src/assets/writefile.js', code, err => {
  if (err) {
    console.log(err);
    return;
  }
  fs.appendFile('src/assets/writefile.js', code, e => {
    if (e) {
      console.log(e);
    }
  });
});
