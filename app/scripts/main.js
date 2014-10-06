/*global require*/

'use strict';
require.config({
	// baseUrl: 'js/lib',
    paths: {
        jquery: '../bower_components/jquery/dist/jquery.min'
    },
    shim: { // mainly for e.g. "backbone" that needs "jquery"
        // 'easing' : ['jquery']
        'jQuery': {
			'exports': 'jQuery'
		}
	}
});

require(['jquery', 'project/page'], function ($, page) {
	page.init();
});
