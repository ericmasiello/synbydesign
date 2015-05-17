module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    var scripts = ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'];

    grunt.initConfig({

        browserify: {
            options:      {
                transform:  [ require('grunt-react').browserify ]
            },
            dist: {
                files: {
                    'dist/scripts/app.js': ['src/scripts/**/*.js']
                }
            }
        },
        //jshint: {
        //    files: scripts,
        //    options: {
        //        debug: true,
        //        globals: {
        //            jQuery: true
        //        }
        //    }
        //},

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version'],
            },
            main: {
                src: 'src/styles/main.css',
                dest: 'src/styles/main.css'
            }
        },

        compass: {
            dist: {
                options: {
                    relativeAssets: true,
                    imagesDir: 'src/images/',
                    sassDir: 'src/styles',
                    cssDir: 'src/styles'
                }
            }
        },
        copy: {
            style: {
                expand: true,
                cwd: 'src/styles',
                src: ['main.css'],
                dest: 'dist/styles/',
                filter: 'isFile'
            },
            images: {
                expand: true,
                cwd: 'src/images',
                src: ['**'],
                dest: 'dist/images/',
                filter: 'isFile'
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/styles',
                    src: ['*.css', '!*.min.css'],
                    dest: 'src/styles'
                }]
            }
        },

        watch: {
            //jsx: {
            //    files: ['jsx/**/*.jsx'],
            //    tasks: ['react', 'browserify']
            //},
            css: {
                files: ['src/styles/**/*.scss'],
                tasks: ['style']
            },
            app: {
                files: scripts,
                //tasks: ['jshint', 'browserify']
                tasks: ['browserify']
            }
        },
        clean: {
            dist: ['dist'],
            tmpCSS: ['src/styles/main.css']
        }
    });

    //grunt.loadNpmTasks('grunt-react');
    //grunt.loadNpmTasks('grunt-browserify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('style', ['compass', 'autoprefixer', 'cssmin', 'copy:style', 'copy:images', 'clean:tmpCSS']);

    grunt.registerTask('default', ['clean:dist', 'style', 'browserify']);
};