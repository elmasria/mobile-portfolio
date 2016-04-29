module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		htmlmin: {
			dist: {
				options: {
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
		},
		/*responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						name: "small",
						width: 120,
						suffix: '_1x',
						quality: 120
					},
					{
						name:"normal",
						width: 350,
						suffix: '_x1',
					},
					{
						name:"normal",
						width: 700,
						suffix:"_x2"
					},
					{
						name: "medium",
						suffix: "_x1",
						width: 800
					},
					{
						upscale: true,
						name: "medium",
						suffix: "_x2",
						width: 1600
					},
					{
						name: "small",
						width: 600,
						suffix: "_x1"
					},
					{
						name: "small",
						width: 1200,
						suffix: "_x2"
					}]
				},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'src/img/',
					dest: 'dist/img'
				}]
			}
		},*/
		clean: {
			dev: {
				src: ['dist/'],
			},
		},
		mkdir: {
			dev: {
				options: {
					create: ['dist/img']
				},
			},
		},
		copy: {
			images: {
				files: [{
					expand: true,
					cwd: 'src/img/',
					src: ['**/*.{png,jpg,svg}'],
					dest:'dist/img/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-mkdir');

	grunt.registerTask('default', ['clean', 'uglify', 'htmlmin', 'cssmin', 'mkdir', 'copy']);
}