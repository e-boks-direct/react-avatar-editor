'use strict';

exports.__esModule = true;

var _parseDom = require('./parse-dom');

var _parseDom2 = _interopRequireDefault(_parseDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Retrieves image URL from collection of data transfer
 * items, if one is present.  As the item will contain
 * an HTML string containing an img element, it's
 * necessary to parse the HTML and then pull the src
 * attribute off the image.
 */
var retrieveImageURL = function retrieveImageURL(dataTransferItems, callback) {
  for (var i = 0; i < dataTransferItems.length; i++) {
    var item = dataTransferItems[i];

    if (item.type === 'text/html') {
      item.getAsString(function (value) {
        var doc = (0, _parseDom2.default)(value);
        var img = doc.querySelector('img');
        if (img && img.src) {
          callback(img.src);
        }
      });
      break;
    }
  }
};

exports.default = retrieveImageURL;
module.exports = exports['default'];