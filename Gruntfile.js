module.exports = function(grunt) {

    grunt.initConfig({

        browserify: {
            options:      {
                transform:  [ require('grunt-react').browserify ]
            },
            dist: {
                files: {
                    //'dist/app.js': ['src/**/*.js'],
                    'dist/app.js': ['src/app/**/*.js']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/app/**/*.js', 'test/**/*.js'],
            options: {
                debug: true,
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            //jsx: {
            //    files: ['jsx/**/*.jsx'],
            //    tasks: ['react', 'browserify']
            //},
            app: {
                files: ['<%= jshint.files %>'],
                //tasks: ['jshint', 'browserify']
                tasks: ['browserify']
            }

        }
    });

    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'browserify']);

};