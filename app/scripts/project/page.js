/**
* PageContact
*
* @author jroug
*
*/
/*jslint browser: true, white: true, nomen: true */
/*global define*/

define([], function () {
	'use strict';

	var parent,
		$element;

	var Page = {

		init: function(_parent) {

			parent = _parent;

			$element = $('.main');

			console.log($);

			console.log('working page.js');
		}
	};

	return Page;
});


