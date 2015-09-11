module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    var scripts = ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'];

    grunt.initConfig({

        browserify: {
            options:      {
                transform:  [ require('grunt-react').browserify ],
                browserifyOptions: {
                    debug: true
                }
            },
            dist: {
                files: {
                    '.tmp/app.js': ['src/scripts/**/*.js']
                }
            }
        },

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
            css: {
                files: ['src/styles/**/*.scss'],
                tasks: ['style']
            },
            app: {
                files: scripts,
                tasks: ['eslint', 'browserify']
            }
        },
        clean: {
            dist: ['dist'],
            tmpCSS: ['src/styles/main.css']
        },
        eslint: {
            target: ['src/scripts/'],
            options: {
                "rules": {
                    "camelcase": 0,
                    "new-cap": 0,
                    "eol-last": 0,
                    "quotes": "single",
                    "global-strict": 0,
                    "react/display-name": 0,
                    "react/jsx-boolean-value": 1,
                    "react/jsx-quotes": 1,
                    "react/jsx-no-undef": 1,
                    "react/jsx-sort-props": 0,
                    "react/jsx-sort-prop-types": 1,
                    "react/jsx-uses-react": 1,
                    "react/jsx-uses-vars": 1,
                    "react/no-did-mount-set-state": 1,
                    "react/no-did-update-set-state": 1,
                    "react/no-multi-comp": 1,
                    "react/no-unknown-property": 1,
                    "react/prop-types": 1,
                    "react/react-in-jsx-scope": 1,
                    "react/self-closing-comp": 1,
                    "react/sort-comp": 0,
                    "react/wrap-multilines": 1
                }
            }
        },
        uglify: {
            options : {
                sourceMap : true,
                sourceMapIncludeSources : true
            },
            app: {
                files: {
                    'dist/scripts/app.js': ['.tmp/app.js']
                }
            }
        }
    });

    grunt.registerTask('style', ['compass', 'autoprefixer', 'cssmin', 'copy:style', 'copy:images', 'clean:tmpCSS']);
    grunt.registerTask('default', ['eslint', 'clean:dist', 'style', 'browserify', 'uglify']);
};