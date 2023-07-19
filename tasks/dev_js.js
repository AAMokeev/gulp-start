const { src, dest } = require('gulp');

const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');

module.exports = function dev_js() {
    return src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(sourcemaps.write('../sourcemaps/'))
        .pipe(dest('build/js'))
        .pipe(browserSync.stream())
}