module.exports = {
    development: {
        options:{
            sourceMap: true,
            outputStyle: 'compressed',
            imagePath: '<%= package.build %>/images'
        },
        files: {
        	'<%= package.build %>/css/main.css': '<%= package.resources %>/scss/main.scss'
        }
    }
};
