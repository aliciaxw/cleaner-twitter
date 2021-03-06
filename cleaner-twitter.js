// ==UserScript==
// @name             cleanerTwitter
// @namespace        https://github.com/aliciaxw
// @version          0.2
// @description      removes everything in dashboard except for profile information
// @author           alicia wang
// @include          http*://twitter.com/*
// @grant            none
// ==/UserScript==

(function() {
  'use strict';

  function hideByClassName(className)
  {
    var elements = document.getElementsByClassName(className);
	for (var i = 0; i < elements.length; i++)
	{
	  var element = elements[i];
	  element.parentNode.removeChild(element);
	}
  }

  (function (oldPage) {
	window.history.pushState = function()
	{
	  location.reload();
	  oldPage.apply(window.history, arguments);
	};
  })(window.history.pushState);

  hideByClassName('moments');
  hideByClassName('wtf-module');
  hideByClassName('trends');
  hideByClassName('Footer');
  hideByClassName('SidebarCommonModules');    //sidebar on user profiles

})();
