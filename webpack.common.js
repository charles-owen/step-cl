const path = require('path');

module.exports = {
	entry: {
		Step: {
			import: path.resolve(__dirname, 'index.js'),
			dependOn: ['Course', 'Users', 'Site']
		},
		StepConsole: {
			import: path.resolve(__dirname, 'js/Console/index.js'),
			dependOn: ['Course', 'Console', 'Users', 'Site']
		}
	}
}
