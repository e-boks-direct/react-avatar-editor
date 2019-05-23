/* eslint-env browser, node */
import loadImageURL from './load-image-url';

export default function loadImageFile(imageFile) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function (e) {
      try {
        var image = loadImageURL(e.target.result);
        resolve(image);
      } catch (e) {
        reject(e);
      }
    };
    reader.readAsDataURL(imageFile);
  });
}