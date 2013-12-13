module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            build: {
                src: ['assets/ts/**/*.ts'],
                out: 'assets/js/main.js'
            },
            watch: {
                src: ['assets/ts/**/*.ts'],
                out: 'assets/js/main.js',
                watch: 'assets'
            }
        },
        sass: {                              
            dist: {                            
                    options: {                       
                        style: 'expanded'
                    },
                    files: [
                        {
                            expand:true,
                            cwd:'assets/sass',
                            src:['**/*.scss'],
                            dest: 'assets/css/',
                            ext: '.css'
                        },
                    ],
                },
            },
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: true
            },
            build: {
                files: {
                    'assets/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>'],
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'assets/js/<%= pkg.name %>.min.js'],
            options: {
                asi:true,
                globals: {
                  jQuery: true,
                  console: true,
                  module: true,
                  document: true,
                  angular: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        cssmin: {
            combine: {
                files: {
                    'assets/css/<%= pkg.name %>.min.css': ['assets/css/main.css']
                }
            }
        },
        imagemin: {
            dist : {
                options: {
                    optimizationLevel: 4
                },
                files: [
                    {
                        expand:true,
                        cwd:'assets/imgmin/',
                        src:['**/*.png', '**/*.jpg', '**/*.jpeg'],
                        dest: 'assets/img/',
                    }
                ],
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task(s).
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['ts:build', 'sass', 'uglify', 'cssmin', 'imagemin']);
};