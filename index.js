var hexToRgb = require('hex-to-rgb');

module.exports = function contrast (hex, threshold) {
  if (typeof threshold === 'undefined') {
    threshold = 180;
  }

  var rgb = hexToRgb(hex);
  var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);

  return (o <= threshold) ? 'dark' : 'light';
};
