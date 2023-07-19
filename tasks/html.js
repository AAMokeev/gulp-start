const { src, dest } = require('gulp');

const browserSync = require('browser-sync');
const fileInclude = require('gulp-file-include');

module.exports = function () {
    return src(['src/**/*.html', '!src/components/**/*.html'])
        .pipe(fileInclude())
        .pipe(dest('build'))
        .pipe(browserSync.stream())
}