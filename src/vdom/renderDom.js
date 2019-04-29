const { Element } = require('./CreateElement');

class ElementSetAttrs {
  static setAttrs($el, props) {
    if (!props) return;
    for (const key in props) {
      if (Object.hasOwnProperty.call(props, key)) {
        ElementSetAttrs.setAttr($el, key, props[key]);
      }
    }
  }

  static setAttr($el, key, value) {
    const el = $el;
    if (key === 'style') el.style.cssText = value;
    if (key === 'className') el.setAttribute('class', value);
    el.setAttribute(key, value);
  }
}
const render = ({ type, props, children }) => {
  const $el = document.createElement(type);
  ElementSetAttrs.setAttrs($el, props);
  if (Array.isArray(children)) {
    // console.log(children);
    children.forEach(child => {
      const $child = child instanceof Element ? render(child) : document.createTextNode(child);
      $el.appendChild($child);
    });
  } else {
    const $child = document.createTextNode(children);
    $el.appendChild($child);
  }
  return $el;
};

const renderDom = ($el, root) => {
  root.appendChild($el);
};

export { render, renderDom };
