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
		jquery: '../bower_components/jquery/dist/jquery.min' // Dine biblioteker
		// other2: '../bower_components/jquery/dist/other2n',
		// other3: '../bower_components/jquery/dist/other3'

		page: 'modules/page' //Dine moduler
		//modul2: 'modules/modul2',
		//modul3: 'modules/modul3',
	},

	shim: {
		'jquery': {
			deps: [],
			exports: '$'
		}
		//, 'easing' : ['jquery']
	}
});

require(['jquery', 'page'], function ($, page) { // afhændigheder

	page.init(); // Vores modul bliver initialiseret

	// andre moduler kan kaldes initialiseres her
	// modul2.init();
	// modul3.init();
});
