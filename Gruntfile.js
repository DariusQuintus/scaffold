module.exports = function(grunt) {

    grunt.initConfig({
        //Compiles SASS to CSS
        sass: {
            target: {
                files: {
                    'src/private/styles/main.css': 'src/private/styles/main.scss'
                }
            }
        },
        //Minifies CSS
        cssmin: {
            options: {
                keepSpecialComments: false,
                mergeIntoShorthands: false,
                roundingPrecision: -1,
                sourceMap: true
            },
            target: {
                files: {
                    'src/public/styles/main.min.css': 'src/private/styles/main.css'
                }
            }
        },
        //Minifies JS
        uglify: {
            options: {
                preserveComments: false,
                mangle: true
            },
            target: {
                files: {
                    'src/public/javascript/main.min.js': 'src/private/javascript/*.js'
                }
            }
        },
        //Watches all tasks depending on filetype
        watch: {
            sassWatch: {
                files: ['src/private/styles/**/*.scss'],
                tasks: ['sass']
            },
            cssWatch: {
                files: ['src/private/styles/main.css'],
                tasks: ['cssmin']
            },
            jsWatch: {
                files: ['src/private/javascript/*.js'],
                tasks: ['uglify']
            }
        }
    });

    // Task Loader
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task is watch
    grunt.registerTask('default', ['watch']);

};