module.exports = {
	default: {
	    options: {
	        config: '<%= package.configs %>/csscomb/csscomb-config.json'
	    },
        files: [{
            expand: true,
            filter: 'isFile',
            cwd: '<%= package.resources %>/scss/',
            src: '**/*.scss',
            dest: '<%= package.resources %>/scss/'
        }]
    }
};
