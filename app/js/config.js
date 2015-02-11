/**
* Config
*
* @author jroug
*
*/
/*jslint browser: true, white: true, nomen: true, unused: false */
/*global require*/

'use strict';

require.config({
	paths: {
		'main'              			: '../main',
		'almond'            			: 'almond.0.2.5',
		'domReady'						: 'domReady',
		'jquery' 						: 'jquery.min',
		'page'							: '../modules/page'
	},

	deps: ['main', 'domReady']
});
