// Generated on 2014-06-21 using generator-webapp-rjs 0.4.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // Configurable paths
            app: 'app',
            dist: '<%= yeoman.app %>/dist'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= yeoman.app %>/js/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'newer:csscomb']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/{,*/}*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/js/{,*/}*.js',
                    '<%= yeoman.app %>/assets/images/{,*/}*.{png,jpg,jpeg,webp}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>',
                    livereload: false
                }
            }
        },

        csscomb: {
            options: {
                config: 'css-comb.json'
            },
            your_target: {
                files: [{
                    expand: true,
                    filter: 'isFile',
                    cwd: '<%= yeoman.app %>/styles',
                    src: '**/*.scss',
                    dest: '<%= yeoman.app %>/styles'
                }]
            },
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp',
            svgfolder: '<%= yeoman.app %>/assets/svg_icons/compressed'
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/js/{,*/}*.js',
                '!<%= yeoman.app %>/js/libs/*',
                '!<%= yeoman.app %>/js/plugins/*',
                '!<%= yeoman.app %>/js/framework/*'
            ]
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                require: './base64-encode.rb',
                sassDir: '<%= yeoman.app %>/styles',                
                cssDir: '<%= yeoman.app %>/styles',
                imagesDir: '<%= yeoman.app %>/assets/images',
                javascriptsDir: '<%= yeoman.app %>/js',
                fontsDir: '<%= yeoman.app %>/styles/fonts',            

                // config.rb moved to grunt
                outputStyle: 'expanded',  //expanded or nested or compact or compressed 
                httpStylesheetsPath: '/', 
                raw: 'Sass::Script::Number.precision = 16\n', 
                noLineComments: true, 
                debugInfo: false,
                relativeAssets: true
            },            
            server: {
                options: {
                    debugInfo: true
                }
            }
        },

        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    name: 'main',
                    out: '<%= yeoman.dist %>/js/main.js',
                    baseUrl: '<%= yeoman.app %>/js',
                    optimize: 'uglify',
                    concat: [],
                    findNestedDependencies: true,
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true,
                    mainConfigFile: '<%= yeoman.app %>/js/main.js'
                }
            }
        },        

        svgmin: { //minimize SVG files
            options: {
                plugins: [
                    { removeViewBox: true },
                    { removeUselessStrokeAndFill: false }
                ]
            },
            dist: {
                expand: true,
                cwd: '<%= yeoman.app %>/assets/svg_icons/raw',
                src: ['*.svg'],
                dest: '<%= yeoman.app %>/assets/svg_icons/compressed',
                // ext: '.colors-theme_1-theme_2-theme_3.svg'
                ext: '.colors-icon.svg'
            }
        },

        grunticon: { //makes SVG icons into a CSS file
            myIcons: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/assets/svg_icons/compressed',
                    src: ['*.svg'],
                    dest: '<%= yeoman.app %>/assets/svg_icons/output'
                }],
                options: {
                    cssprefix: '.icon-',
                    colors: {
                        icon: '#000'
                        // theme_1: '#ccc',
                        // theme_2: '#ed3921',
                        // theme_3: '#8DC63F'
                    }
                }
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '{,*/}*.html',
                        'styles/*.css',
                        'assets/**/*',
                        'js/vendor/requirejs/require.js'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '<%= yeoman.app %>/styles',
                src: '{,*/}*.css'
            }
        },

		modernizr: {
			dist: {
				devFile: '<%= yeoman.app %>/js/vendor/modernizr/modernizr.js',
				outputFile: '<%= yeoman.dist %>/js/vendor/modernizr/modernizr.js',
				uglify: true
			}
		},

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'compass:server',
                'copy:styles'
            ],
            dist: [
                'compass',
                'copy:styles'             
            ]
        }
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:dist',
        'requirejs',
        'copy:dist',
        'modernizr'
    ]);

    grunt.registerTask('svg', [
        'clean:svgfolder',
        'svgmin',
        'grunticon'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'build'
    ]);
};
