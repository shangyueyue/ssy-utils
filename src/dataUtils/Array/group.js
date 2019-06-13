// 分组
function groupBy(groups) {
  return groups.reduce((pre, cur) => {
    pre[cur.groupId] = (pre[cur.groupId] || []).concat(cur); // eslint-disable-line
    return pre;
  }, {});
}

const groupsStudents = [
  {
    groupId: 1,
    student: {
      name: 'shangyy',
      age: 18,
    },
  },
  {
    groupId: 2,
    student: {
      name: 'shangyy',
      age: 18,
    },
  },
  {
    groupId: 3,
    student: {
      name: 'shangyy',
      age: 18,
    },
  },
  {
    groupId: 1,
    student: {
      name: 'shangyy',
      age: 18,
    },
  },
  {
    groupId: 2,
    student: {
      name: 'shangyy',
      age: 18,
    },
  },
];
console.log(groupBy(groupsStudents));

// 联合
function groupAdd(group1, group2) {
  return group2.map(item => {
    const gItem = group1.find(g => g.groupId === item.groupId);
    return {
      ...item,
      ...gItem,
    };
  });
}

const group1 = [
  {
    groupId: 1,
    groupName: 'class1',
  },
  {
    groupId: 2,
    groupName: 'class2',
  },
];

console.log(groupAdd(group1, groupsStudents));
