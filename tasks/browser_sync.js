const browserSync = require('browser-sync');

module.exports = function bs_html() {
	browserSync.init({
		server: {
			baseDir: 'build/',
			host: '192.168.0.103',
		},
		callbacks: {
			ready: function (err, browserSync) {
				browserSync.addMiddleware("*", function (req, res) {
					res.writeHead(302, {
						location: "404.html"
					});
					res.end("Redirecting!");
				});
			}
		},
		browser: 'chrome',
		logPrefix: 'BS-HTML:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true
	})
}