'use strict';

exports.__esModule = true;
/* global DOMParser:false */

/*
 * This method uses DOMParser to parse an HTML string into
 * a document.  By using this approach we avoid the potential
 * for XSS attacks on consumers of this component, which would
 * be created by parsing the string via a detached DOM fragment,
 * as in this latter case script in onload attributes will be
 * run in the context of the host page.
 *
 * The drawback to this approach is that browser support is not
 * as wide - IE10 and up along with evergreen browsers.
 */
var parseDOM = function parseDOM(str) {
  var parser = typeof DOMParser === 'undefined' ? null : new DOMParser();

  if (!parser) {
    return null;
  }

  return parser.parseFromString(str, 'text/html');
};

exports.default = parseDOM;
module.exports = exports['default'];