var contrast = require('./index');
var test = require('tape');

test('dark', function (t) {
  t.equal(contrast('000000'), 'dark', 'black is dark');
  t.equal(contrast('666666'), 'dark', 'gray is dark');
  t.end();
});

test('dark with threshold', function (t) {
  t.equal(contrast('000000', 255), 'dark', 'black with threshold of 255 is dark');
  t.equal(contrast('666666', 100), 'light', 'gray with threshold of 100 is light');
  t.end();
});

test('light', function (t) {
  t.equal(contrast('ffffff'), 'light', 'white is light');
  t.equal(contrast('cccccc'), 'light', 'gray is light');
  t.end();
});

test('light with threshold', function (t) {
  t.equal(contrast('ffffff', 255), 'dark', 'white with threshold of 0 is dark');
  t.equal(contrast('cccccc', 210), 'dark', 'gray with threshold of 220 is dark');
  t.equal(contrast('cccccc', 200), 'light', 'gray with threshold of 230 is light');
  t.end();
});

test('with hash', function (t) {
  t.equal(contrast('#000000'), 'dark', 'dark with hash');
  t.end();
});
