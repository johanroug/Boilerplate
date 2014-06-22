/**
* Site
*
* @author jroug
*
*/
/*jslint browser: true, white: true, nomen: true */
/*global define*/
define([
	'jquery',
	'project/page'

], function(
	$,
	page
			
	) {


	'use strict';

	
	var Site = {
		
		init: function() {
			
			page.init(this);
			
		}
	};

	return Site;
});
