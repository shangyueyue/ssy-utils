const list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 },
];

function convert(data) {
  const map = new Map();
  data.forEach(item => {
    map.set(item.id, item);
  });
  const result = [];
  data.forEach(item => {
    if (map.has(item.parentId)) {
      const temp = map.get(item.parentId);
      if (!temp.children) temp.children = [];
      temp.children.push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
const newList = convert(list);
console.log(newList);

