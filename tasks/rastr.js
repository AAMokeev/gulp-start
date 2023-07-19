const { src, dest } = require('gulp');

const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const recompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');

module.exports = function rastr() {
	return src('src/images/**/*.+(png|jpg|jpeg|gif|ico)')
        .pipe(plumber())
		.pipe(changed('build/images'))
		.pipe(imagemin({
				interlaced: true,
				progressive: true,
				optimizationLevel: 5,
			},
			[
				recompress({
					loops: 6,
					min: 50,
					max: 90,
					quality: 'high',
					use: [pngquant({
						quality: [0.8, 1],
						strip: true,
						speed: 1
					})],
				}),
				imagemin.gifsicle(),
				imagemin.optipng(),
				imagemin.svgo()
			], ), )
		.pipe(dest('build/images'))
  	.pipe(browserSync.stream())
}