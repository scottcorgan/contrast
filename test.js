var contrast = require('./index');
var test = require('tape');

test('dark', function (t) {
  
  t.equal(contrast('000000'), 'dark', 'black is dark');
  t.equal(contrast('666666'), 'dark', 'gray is dark');
  t.end();
});

test('light', function (t) {
  
  t.equal(contrast('ffffff'), 'light', 'white is light');
  t.equal(contrast('cccccc'), 'light', 'gray is light');
  t.end();
});

test('with hash', function (t) {
  
  t.equal(contrast('#000000'), 'dark', 'dark with hash');
  t.end();
});

