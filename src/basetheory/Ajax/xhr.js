const xhr = new window.XMLHttpRequest();

xhr.open('GET', 'http://www.baidu.com', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // xhr.responseText;
  }
};
xhr.timeout = 15 * 1000;
xhr.ontimeout = () => {};
xhr.onerror = () => {};
// xhr.setRequestHeader(key, val);
xhr.addEvenListener('progress', () => {});
xhr.send();
