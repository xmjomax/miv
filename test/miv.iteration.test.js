
const miv = require('../miv');

var students = [
    { name: '张三', age: 20 },
    { name: '李四', age: 22 },
    { name: '王五', age: 25 }
];

var school = [
    {
        classes: '班级一',
        student: [
            { name: '张三', age: 20 },
            { name: '李四', age: 22 },
            { name: '王五', age: 25 }
        ]
    },
    {
        classes: '班级二',
        student: [
            { name: '赵六', age: 26 },
            { name: '孙七', age: 28 },
            { name: '周八', age: 29 }
        ]
    }
];

console.log(miv);

console.log(miv.iteration.map(students, 'age'));
// console.log(miv.map(school, 'student[1]age'));

