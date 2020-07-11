module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'./src/frontend/public/assets/css/custom.css' : './src/frontend/public/assets/sass/custom.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}

	});
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");

	// this would be run by typing "grunt test" on the command line
	grunt.registerTask('test', ['jshint']);

	// this would be run by typing "grunt annotate" on the command line
	grunt.registerTask('annotate', ['ngAnnotate', 'concat']);

	// the default task can be run just by typing "grunt" on the command line
	grunt.registerTask('default', ['watch']);
};
