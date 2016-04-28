module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		htmlmin: {                                     // Task
    		dist: {                                    // Target
      			options: {                             // Target options
        			removeComments: true,
        			collapseWhitespace: true
      			},
      			files: {
        			'dist/index.html': 'src/index.html',
        			'dist/project-2048.html': 'src/project-2048.html',
        			'dist/project-mobile.html': 'src/project-mobile.html',
        			'dist/project-webperf.html': 'src/project-webperf.html'
      			}
  			}
  		},
		uglify: {
			build: {
				src: 'src/js/perfmatters.js',
				dest: 'dist/js/perfmatters.min.js'
			}
		},
		cssmin: {
  			options: {
    			shorthandCompacting: false,
    			roundingPrecision: -1
  			},
  			target: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/css',
					ext: '.min.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['uglify', 'htmlmin', 'cssmin']);
}