// 获取元素的绝对位置
function ElementLayout(el) {
  const layout = {
    width: el.offsetWidth,
    height: el.offsetHeight,
    left: el.offsetLeft,
    top: el.offsetTop,
  };
  if (el.offsetParent) {
    const ParentLayout = ElementLayout(el.offsetParent);
    layout.left = ParentLayout.left;
    layout.top = ParentLayout.top;
  }
  return layout;
}
export default ElementLayout;
