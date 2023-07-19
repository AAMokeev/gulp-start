const { src, dest } = require('gulp');

const svgmin = require('gulp-svgmin');
const sprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');

module.exports = function svg_sprite() {
	return src(['src/svg/**/*.svg', '!src/svg/sprites/**/*.svg'])
		.pipe(cheerio({
			run: function ($) {
				$('[style]').removeAttr('style');
				$('[stroke]').removeAttr('stroke');
			},
			parserOptions: { xmlMode: true }
		}))
		.pipe(replace('&gt;', '>'))
		.pipe(svgmin())
		.pipe(sprite({
			mode: {
				symbol: {
					sprite: '../sprites/sprite.svg',
					render: {
						scss: {
							dest:'../../scss/svg/sprite.scss',
							template:'src/scss/template/_template-svg.scss'
						}
					}
				}	
			}
		}))
		.pipe(dest('src/svg'))
		.pipe(src(['src/svg/**/*.svg']))
		.pipe(dest('build/svg'))
}
