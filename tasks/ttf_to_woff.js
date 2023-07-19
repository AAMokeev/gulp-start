const { src } = require('gulp');

const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const changed = require('gulp-changed');
const multiDest = require('gulp-multi-dest');

module.exports = function ttf_to_woff(done) {
    return src('src/fonts/**/*.ttf')
        .pipe(changed('build/fonts', {
            extention: '.woff'
        }))
        .pipe(ttf2woff())
        .pipe(multiDest(['src/fonts', 'build/fonts']))

        .pipe(src('src/fonts/**/*.ttf'))
        .pipe(changed('build/fonts', {
            extention: '.woff2'
        }))
        .pipe(ttf2woff2())
        .pipe(multiDest(['src/fonts', 'build/fonts']))
}