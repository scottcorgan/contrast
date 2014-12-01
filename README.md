# contrast

Determine if the given color is light or dark

## Install

```
npm install contrast --save
```

### Usage

```js
var contrast = require('contrast');

var el = document.querySelector('#some-element');
var bgColor = e.style.backgroundColor;

if (contrast(bgColor) === 'light') {
  textColor = '#000';
}
else {
  textColor = '#fff'
}

el.style.color = textColor;
```

## Run Tests

```
npm install
npm test
```
