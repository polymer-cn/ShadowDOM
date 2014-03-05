// Copyright 2014 The Polymer Authors. All rights reserved.
// Use of this source code is goverened by a BSD-style
// license that can be found in the LICENSE file.

(function(scope) {
  'use strict';
  if (!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")) {
  	// UC and QQ don't support, no SVGTitleElement constructor
  	return;
  }

  var registerObject = scope.registerObject;

  var SVG_NS = 'http://www.w3.org/2000/svg';
  var svgTitleElement = document.createElementNS(SVG_NS, 'title');
  var SVGTitleElement = registerObject(svgTitleElement);
  var SVGElement = Object.getPrototypeOf(SVGTitleElement.prototype).constructor;

  scope.wrappers.SVGElement = SVGElement;
})(window.ShadowDOMPolyfill);
