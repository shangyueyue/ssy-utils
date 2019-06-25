let imageNode = (function(){
  let imgNode = document.appendChild(document.createElement('img'))
  return{
      setSrc(src){
          imgNode.src=src;
      }
  }
})();

let proxy = (function(){
  let img = new image();
  img.onload(){
      imageNode.setSrc(img.src);
  }
  return {
      setSrc(src){
          imageNode.setSrc('loading.png');
          img.src = src;
      }
  }
}();

proxy.setSrc('001.png');