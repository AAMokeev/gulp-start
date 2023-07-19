const { parallel, series } = require('gulp');

const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.styles = tasks.styles;
exports.libs_style = tasks.libs_style;
exports.dev_js = tasks.dev_js;
exports.libs_js = tasks.libs_js;
exports.html = tasks.html;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.svg_sprite = tasks.svg_sprite;
exports.ttf_to_woff = tasks.ttf_to_woff;
exports.fonts = tasks.fonts;
exports.browser_sync = tasks.browser_sync;
exports.watch = tasks.watch;

exports.default = parallel(  
	exports.html,
	exports.dev_js,
	exports.libs_style,
	exports.libs_js,
	exports.rastr,
	exports.webp,
	exports.svg_sprite,
	exports.ttf_to_woff,
	exports.fonts,
    exports.styles,
	exports.browser_sync,
	exports.watch
)