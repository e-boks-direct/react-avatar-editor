'use strict';

exports.__esModule = true;
exports.default = loadImageFile;

var _loadImageUrl = require('./load-image-url');

var _loadImageUrl2 = _interopRequireDefault(_loadImageUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadImageFile(imageFile) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function (e) {
      try {
        var image = (0, _loadImageUrl2.default)(e.target.result);
        resolve(image);
      } catch (e) {
        reject(e);
      }
    };
    reader.readAsDataURL(imageFile);
  });
} /* eslint-env browser, node */
module.exports = exports['default'];