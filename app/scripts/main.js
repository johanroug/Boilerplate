/*
 * Site functional wrapper
 *
 */

/*jslint plusplus: true, vars: true, browser: true, white:true*/
/*global require: true*/

/* Remember to update Gruntfile.js with config */
require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
    },
    shim: {
        // 'easing' : ['jquery']        
	}
});

require(['jquery', 'project/site'], function ($, site) {
    'use strict';
    
    site.init();
});
