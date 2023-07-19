const plugins = [];

const { src, dest } = require('gulp');

const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const chalk = require('chalk');

module.exports = function libs_js(done) {
    if (plugins.length > 0) {
        return src(plugins)
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(concat('libs.min.js'))
            .pipe(sourcemaps.write('../sourcemaps/'))
            .pipe(multiDest('build/js'))
    } else {
        return done(console.log(chalk.bgYellow.black('No added JS plugins')));
    }   
}