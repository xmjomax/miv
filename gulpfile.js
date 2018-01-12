const gulp = require("gulp");
const rollup = require('rollup');
const sourcemaps = require("gulp-sourcemaps");
// const babel = require("gulp-babel");
const concat = require("gulp-concat");
const clean = require('gulp-clean')
const path = require("path");
const resolve = require('rollup-plugin-node-resolve');

const packageJson = require('./package.json');
const version = packageJson.version;
const author = packageJson.author;
const babel = require('rollup-plugin-babel');
var banner =
    '/*!\n' +
    ' * Miv.js v' + version + '\n' +
    ' * (c) ' + (new Date().getFullYear() == '2018' ? '2018' : '2018 - ' + new Date().getFullYear()) + ' ' + author + ' \n' +
    ' * Released under the MIT License.\n' +
    ' */';

const chunkJs = function() {
    gulp.watch('src/**/*.js', function(obj) {
        let _pwd = obj.path;

        let _file = {
            root: process.cwd(),
            dir: path.dirname(_pwd),
            name: path.basename(_pwd),
            ext: path.extname(_pwd)
        };
        let findername = path.basename(_file.dir);
        let outputDir = path.join(_file.root, "lib/");
        let buildFileName = 'Miv.' +
            findername.charAt(0).toUpperCase() +
            findername.slice(1) +
            _file.ext;

        build();

        /**
         * rollup编译
         */
        async function build() {
            const bundle = await rollup.rollup({
                input: _file.dir + '/index.js',
                plugins: [
                    babel({
                        exclude: 'node_modules/**' // 只编译我们的源代码
                    }),
                    resolve({
                        customResolveOptions: {
                            moduleDirectory: 'node_modules'
                        }
                    })
                ],
                external: ['lodash']
            });
            await bundle.write({
                file: outputDir + buildFileName,
                format: 'umd',
                name: _file.name.replace(_file.ext, ''),
                banner: banner
                // sourcemap: false
            })

        };
    })
};


gulp.task("default", chunkJs());