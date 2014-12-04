/**
* Main
*
* @author jroug
*
*/
/*jslint browser: true, white: true, nomen: true, unused: false */
/*global require*/

'use strict';
require.config({
	// baseUrl is defined in grunt.js

	paths: {
		domReady: 'libs/domReady',
		jquery: '../js/vendor/jquery/dist/jquery.min',
		page: 'modules/page' 
	},

	shim: {
		'jquery': {
			deps: [],
			exports: '$'
		}
		//, 'easing' : ['jquery']
	}
});

require(['domReady!', 'jquery', 'page'], function (doc, $, page) { 

	page.init(); 

});
