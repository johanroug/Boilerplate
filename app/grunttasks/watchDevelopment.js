module.exports = function(grunt) {
    grunt.registerTask('watchDevelopment', function() {
        // Configuration for watch:development tasks.
        var config = {
            scss: {
                files: ['<%= package.resources %>/scss/**/*.scss'],
                tasks: ['newer:csscomb', 'sass:development']
            },

            js: {
                files: ['<%= package.resources %>/js/**/*.js'],
                tasks: ['requirejs:development']
            }
        };

        grunt.config('watch', config);
        grunt.task.run('watch');
    });
};
