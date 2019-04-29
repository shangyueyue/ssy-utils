import { createElement } from './CreateElement';
import { render, renderDom } from './renderDom';
import './styles.less';

const Children = [
  createElement('li', null, 'line 1'),
  createElement('li', { style: 'color: red' }, 'line 2'),
  createElement('li', null, 'line 3'),
  createElement('li', null, 'line 4'),
];
const vdom = createElement('ul', { class: 'list' }, Children);
const $el = render(vdom);
const root = document.createElement('div');
renderDom($el, root);
document.body.appendChild(root);
