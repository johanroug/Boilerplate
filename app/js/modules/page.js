/**
* PageContact
*
* @author jroug
*
*/
/*jslint browser: true, white: true, nomen: true, unused: false */
/*global define*/

define(['domReady', 'jquery'], function (doc, $) {
	'use strict';

	var Page = {

		init: function(_parent) { 

			var parent = _parent,	
				$element = $('.main');

			console.log('working page.js');
		}
	};

	return Page; 
});
