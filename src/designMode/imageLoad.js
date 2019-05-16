function imageLoad(src) {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.src = src;
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      reject(img);
    };
  });
}
const src = './assets/images/cartong.jpg';
const loadImg = imageLoad(src);
loadImg.then(img => {
  return img;
});
