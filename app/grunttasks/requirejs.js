module.exports = {
    development:{
        options: {
            name:'almond',
            wrap: true,
            preserveLicenseComments:false,
            baseUrl: "<%= package.resources %>/js/libs",
            mainConfigFile: "<%= package.resources %>/js/config.js",
            out: "<%= package.build %>/js/main.js",
            optimize: "none" //uglify2, none
        }
    }
};
