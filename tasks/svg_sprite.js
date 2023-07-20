const { src, dest, parallel } = require('gulp');

const svgmin = require('gulp-svgmin');
const sprite = require('gulp-svg-sprite');

const spriteMono = function svg_sprite_mono() {
	return src(['src/svg/mono/*.svg', '!src/svg/sprites/**/*.svg'])
		.pipe(svgmin())
		.pipe(sprite({
			mode: {
				symbol: {
					sprite: '../sprites/sprite-mono.svg',
					render: {
						scss: {
							dest:'../../scss/svg/sprite-mono.scss',
							template:'src/scss/template/_template-svg.scss'
						},
					},
				},	
			},
			shape: {
				transform: [
				  {
					svgo: {
						plugins: [
							{
								name: "removeAttrs",
								params: {
								attrs: ['stroke.*', 'fill', 'class', 'data-name']
								}
							},
						],
					},
				},
				],
			  },
		}))
		.pipe(dest('src/svg'))
}

const spriteMulti = function svg_sprite_multi() {
	return src(['src/svg/multi/**/*.svg', '!src/svg/sprites/**/*.svg'])
		.pipe(svgmin())
		.pipe(sprite({
			mode: {
				symbol: {
					sprite: '../sprites/sprite-multi.svg',
					render: {
						scss: {
							dest:'../../scss/svg/sprite-multi.scss',
							template:'src/scss/template/_template-svg.scss'
						},
					},
				},	
			},
			shape: {
				transform: [
				  {
					svgo: {
						plugins: [
							{
								name: "removeAttrs",
								params: {
								attrs: ['class', 'data-name']
								}
							},
							{
								name: 'removeUselessStrokeAndFill',
								params: {
									stroke: removeStroke = false,
								}

							},
						],
					},
				},
				],
			  },
		}))
		.pipe(dest('src/svg'))
}

module.exports = parallel(spriteMono, spriteMulti)