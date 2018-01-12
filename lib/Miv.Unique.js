/*!
 * Miv.js v0.0.1
 * (c) 2018 Sims hong 
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash')) :
	typeof define === 'function' && define.amd ? define(['exports', 'lodash'], factory) :
	(factory((global.uniqueId = {}),global._));
}(this, (function (exports,_) { 'use strict';

_ = _ && _.hasOwnProperty('default') ? _['default'] : _;

function partial() {
    return _.partial;
}

/**
 * 在程序运行中保持独有的 id
 * @return {_.uniqueId}
 * @example
 * _.times(6, _.uniqueId.bind(null, 'bar_'))
 * // =>
 * @see lodash
 */
function uniqueId() {
  return _.uniqueId;
}

exports.partial = partial;
exports.uniqueId = uniqueId;

Object.defineProperty(exports, '__esModule', { value: true });

})));
