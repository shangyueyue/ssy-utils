// 深度复制
function deepClone(datas) {
  if (typeof datas !== 'object' || datas === null) return datas;
  const newData = new datas.constructor();
  for (const key in datas) {
    if (Object.hasOwnProperty.call(datas, key)) {
      newData[key] = deepClone(datas[key]);
    }
  }
  return newData;
}

const datas = {
  family: {
    father: 'baba',
    mother: 'mama',
    children: ['brother', 'sister'],
  },
  mine: {
    name: 'shangyy',
    hobby: ['basketball', 'football'],
  },
};

const cloneDatas = deepClone(datas);
console.log(cloneDatas);
