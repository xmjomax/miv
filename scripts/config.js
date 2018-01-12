// import resolve from 'rollup-plugin-node-resolve';
// import json from 'rollup-plugin-json';
// import { version, author } from '../package.json';

// var babel = require('rollup-plugin-babel');
// var json = require('rollup-plugin-json');
// var cjs = require('rollup-plugin-commonjs')
// var replace = require('rollup-plugin-replace')
// var node = require('rollup-plugin-node-resolve')
// var resolve = require('rollup-plugin-node-resolve');
// var packageJson = require('../package.json');
// var version = packageJson.version;
// var author = packageJson.author;

// var banner =
//     '/*!\n' +
//     ' * Miv.js v' + version + '\n' +
//     ' * (c) ' + (new Date().getFullYear() == '2018' ? '2018' : '2018 - ' + new Date().getFullYear()) + ' ' + author + ' \n' +
//     ' * Released under the MIT License.\n' +
//     ' */';
/**
 * rollup配置文件
 * @param {String} input 
 * @param {String} output 
 * @param {String} name 
 */

// export default {
//     input: '/Users/jomax/GitHub/miv/src/iteration/index.js',
//     output: {
//         file: '/Users/jomax/GitHub/miv/lib/Miv.Iteration.js',
//         name: 'iteration',
//         sourcemap: true, 
//         format: 'umd',
//         banner: banner
//     },
//     // env: 'development',
//     plugins: [
//         json(),
//         babel({
//             exclude: 'node_modules/**' // 只编译我们的源代码
//           }),
//         resolve({
//             customResolveOptions: {
//                 moduleDirectory: 'node_modules'
//             }
//         }) 
//     ],
//     external: ['lodash']
// };