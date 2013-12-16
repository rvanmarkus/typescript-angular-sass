module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            build: {
                src: ['assets/ts/**/*.ts'],
                out: 'assets/js/main.js'
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
                banner: '/* <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> by @flyersweb */\n',
                mangle: true
            },
            build: {
                files: {
                    'assets/js/<%= pkg.name %>.min.js': ['assets/js/main.js','assets/js/bootstrap.js'],
                }
            },
            bootstrap: {
                src: [
                  'assets/js/bootstrap/transition.js',
                  'assets/js/bootstrap/alert.js',
                  'assets/js/bootstrap/button.js',
                  'assets/js/bootstrap/carousel.js',
                  'assets/js/bootstrap/collapse.js',
                  'assets/js/bootstrap/dropdown.js',
                  'assets/js/bootstrap/modal.js',
                  'assets/js/bootstrap/tooltip.js',
                  'assets/js/bootstrap/popover.js',
                  'assets/js/bootstrap/scrollspy.js',
                  'assets/js/bootstrap/tab.js',
                  'assets/js/bootstrap/affix.js'
                ],
                dest: 'assets/js/bootstrap.js'
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
                    'assets/css/<%= pkg.name %>.min.css': ['assets/css/**/*.css']
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['ts:build', 'sass', 'uglify:bootstrap', 'uglify:build', 'cssmin', 'imagemin']);
};