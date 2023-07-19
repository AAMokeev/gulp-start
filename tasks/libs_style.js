const plugins = [];

const { src, dest } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const chalk = require('chalk');

module.exports = function libs_style(done) {
    if (plugins.length > 0) {
        return src(plugins)
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(concat('libs.min.css'))
            .pipe(sourcemaps.write('../sourcemaps/'))
            .pipe(dest('build/css/'))
    } else {
        return done(console.log(chalk.bgYellow.black('No added CSS/SCSS plugins')));
    }
}