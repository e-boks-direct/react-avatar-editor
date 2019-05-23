"use strict";

exports.__esModule = true;
exports.default = loadImageURL;
/* eslint-env browser, node */

function isDataURL(str) {
  if (str === null) {
    return false;
  }
  var regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i;
  return !!str.match(regex);
}

function loadImageURL(imageURL, crossOrigin) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onload = function () {
      return resolve(image);
    };
    image.onerror = reject;
    if (isDataURL(imageURL) === false && crossOrigin) {
      image.crossOrigin = crossOrigin;
    }
    image.src = imageURL;
  });
}
module.exports = exports["default"];