/*global require*/

'use strict';
require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery.min'
    },
    shim: { // mainly for e.g. "backbone" that needs "jquery"
        // 'easing' : ['jquery']
        'jquery': {
            deps: [],
            exports: '$'
        }
	}
});

require(['jquery', 'project/page'], function ($, page) {
	page.init();
});
