const { src, dest } = require('gulp');

module.exports = function svg_sprite_build() {
    return src('src/svg/sprites/**/*.svg')
        .pipe(dest('build/svg'))
}