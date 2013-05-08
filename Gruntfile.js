module.exports = function(grunt) {
	grunt.initConfig({
		meta: {
			version: '0.0.5'
		},

		jshint: {
			options: {
				"asi" : false,
				"bitwise" : true,
				"boss" : false,
				"curly" : true,
				"debug": false,
				"devel": false,
				"eqeqeq": true,
				"evil": false,
				"expr": true,
				"forin": false,
				"immed": true,
				"latedef" : false,
				"laxbreak": false,
				"multistr": true,
				"newcap": true,
				"noarg": true,
				"node" : true,
				"browser": true,
				"noempty": false,
				"nonew": true,
				"onevar": false,
				"plusplus": false,
				"regexp": false,
				"strict": false,
				"sub": false,
				"trailing" : true,
				"undef": true,
				globals: {
					jQuery: true,
					Backbone: true,
					_: true,
					$: true,
					require: true,
					define: true
				}
			},
			js: ['public/js/**/*.js', 'source/**/*.js']
		}
	});

	// Laoded tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Default task.
	grunt.registerTask('default', ['jshint']);
};
