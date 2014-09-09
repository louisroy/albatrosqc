/*global module:false*/
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		// Watch for all modified files
		watch: {
			options: {
				livereload: true
			},
			files: [
				'css/*.css',
				'js/*.js'
			]
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['watch']);

};
