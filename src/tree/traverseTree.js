// const data = [
//   {
//     id: '01',
//     text: '湖北省',
//     children: [
//       {
//         id: '01001',
//         text: '武汉市',
//         children: [
//           {
//             id: '01001001',
//             text: '武昌区',
//             children: null,
//           },
//           {
//             id: '01001002',
//             text: '洪山区',
//             children: null,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: '02',
//     text: '广东省',
//     children: [
//       {
//         id: '02001',
//         text: '深圳市',
//         children: [
//           {
//             id: '02001001',
//             text: '罗湖区',
//             children: null,
//           },
//           {
//             id: '02001002',
//             text: '福田区',
//             children: null,
//           },
//         ],
//       },
//     ],
//   },
// ];

// 深度优先递归遍历
function deepRecursionTraverse(data) { // eslint-disable-line
  if (!Array.isArray(data)) return;
  data.forEach(item => {
    console.log(item.text);
    deepRecursionTraverse(item.children);
  });
}

// deepRecursionTraverse(data);

// 深度优先非递归遍历
function deepNoRecursionTraverse(data) {// eslint-disable-line
  let stark = [...data];
  while (stark.length) {
    const temp = stark.shift();
    console.log(temp.text);
    if (temp.children && temp.children.length) {
      stark = [...temp.children, ...stark];
    }
  }
}

// deepNoRecursionTraverse(data);

// 广度优先 非递归遍历
function wideNoRecursionTraverse(data) {// eslint-disable-line
  let stark = [...data];
  while (stark.length) {
    const temp = stark.shift();
    console.log(temp.text);
    if (temp.children && temp.children.length) {
      stark = [...stark, ...temp.children];
    }
  }
}
// wideNoRecursionTraverse(data);
