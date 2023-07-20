const { watch, parallel, series } = require('gulp');

module.exports = function watching() {
	watch('src/**/*.html', parallel('html'));
	watch('src/**/*.scss', parallel('styles'));
	watch('src/**/*.js', parallel('dev_js'));
	watch('src/**/*.json', parallel('html'));
	watch('src/images/**/*.+(png|jpg|jpeg|gif|ico)', parallel('rastr'));
	watch('build/images/**/*.+(png|jpg|jpeg)', parallel('webp'));
	watch(['src/svg/**/*.svg', '!src/svg/sprites/**/*.svg'], series('svg_sprite', 'svg_sprite_build'));
	watch('src/fonts/**/*.ttf', series('ttf_to_woff', 'fonts'));
}