// ==UserScript==
// @name         cleaner-twitter
// @namespace    https://github.com/aliciaxw/
// @version      0.1
// @description  removes unnecessary twitter modules
// @author       alicia wang
// @include      https://twitter.com/*
// @grant        none
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

  hideByClassName('moments');
  hideByClassName('wtf-module');
  hideByClassName('trends');
  hideByClassName('Footer');
  hideByClassName('SidebarCommonModules');    //sidebar on user profiles

  //to-do: script only works on refresh, cannot navigate to other twitter page by click

})();