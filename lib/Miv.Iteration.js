/*!
 * Miv.js v0.0.1
 * (c) 2018 Sims hong 
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash')) :
	typeof define === 'function' && define.amd ? define(['exports', 'lodash'], factory) :
	(factory((global.times = {}),global._));
}(this, (function (exports,_) { 'use strict';

_ = _ && _.hasOwnProperty('default') ? _['default'] : _;

/**
 * @description 循环次数，并回调
 * @param {Number} n
 * @param {Function} fn
 * @return no
 * @see lodash 
 */
// function times(n, fn) { 
//     _.times(n, function (index) {
//         fn(index);   
//     })    
// }

function times(n, fn) {
    _.times(n, function (index) {
        fn(index);
    });
}

/**
 * @description 深层查找数组对象属性值
 * @param {Object} obj
 * @param {String} propStr 如: 'name' | 'student[0].name'
 * @return {Array} 数组形式返回值
 * @see lodash
 * @example:
 * 1.
 * var students = [
 * { name: '张三', age: 20 },
 * { name: '李四', age: 22 },
 * { name: '王五', age: 25 }
 * ];
 * miv.map(students, 'age');
 * [ 20, 22, 25 ]
 *
 * 2.
 * var school = [
 * {
 *     classes: '班级一',
 *     student: [
 *         { name: '张三', age: 20 },
 *         { name: '李四', age: 22 },
 *         { name: '王五', age: 25 }
 *     ]
 * },
 * {
 *     classes: '班级二',
 *     student: [
 *        { name: '赵六', age: 26 },
 *         { name: '孙七', age: 28 },
 *         { name: '周八', age: 29 }
 *     ]
 * } 
 * ];
 * miv.map(school, 'student[1]age'); 
 *  // => [ 22, 28 ]
 */
//  function map(obj, propStr) {  
// 

function map(obj, propStr) {
  return _.map(obj, propStr);
}

exports.times = times;
exports.map = map;

Object.defineProperty(exports, '__esModule', { value: true });

})));
