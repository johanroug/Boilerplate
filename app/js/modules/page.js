/**
* PageContact
*
* @author jroug
*
*/
/*jslint browser: true, white: true, nomen: true, unused: false */
/*global define*/

define(['jquery'], function ($) {
	'use strict';

	var Page = {

		init: function(_parent) { // Denne kaldes fra fx main.js

			var parent = _parent,	// Definer variabler i top, hvis muligt
				$element = $('.main');

			console.log('working page.js');
		},

		anotherMethod: function() { // Eks. på endnu en metode i vores objekt
			// HUSK - Kun en functionalitet pr metode
		}
	};

	return Page; //Returner object, så vi kan bruge den i andre JS filer
});
