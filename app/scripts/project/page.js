/**
* PageContact
*
* @author jroug
*
*/
/*jslint browser: true, white: true, nomen: true */
/*global define*/

define(['jquery'], function ($) {
	'use strict';

	var parent,
		$element;
		
	var Page = {
		
		init: function(_parent) {
			
			parent = _parent;

			$element = $('.main');

			console.log('working page.js');				
		}
	};

	return Page;
});

	