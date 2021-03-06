# {{i18n}} [![NPM version](https://badge.fury.io/js/handlebars-helper-i18n.svg)](http://badge.fury.io/js/handlebars-helper-i18n)


> {{i18n}} handlebars helper

## Install

#### Install with [npm](npmjs.org)

```bash
npm i handlebars-helper-i18n --save-dev
```


## Register the helper

```js
var Handlebars = require('handlebars');
var helper = require('handlebars-helper-i18n');

Handlebars.registerHelper('i18n', helper.i18n);
```

### Register the helper with Assemble


**[Assemble](http://assemble.io) v0.6.x**

```js
var assemble = require('assemble');
var helper = require('assemble-handlebars-i18n');

assemble.helper('i18n', helper.i18n);
```


**[Assemble](http://assemble.io) v0.4.x**

In your project's Gruntfile:

```js
assemble: {
  options: {
    helpers: ['handlebars-helper-i18n']
  },
  files: {...}
}
```

_Also, be sure to add the helper to `devDependencies` in package.json for Assemble to automatically register the helper._


## Usage

Given file name: `Executive Summary 2013.md`:

```html
{{i18n "key"}}
```

Renders to `executive-summary-2013.md`.


## Author

**Laurent Goderre**

+ [github/LaurentGoderre](https://github.com/LaurentGoderre)
+ [twitter/LaurentGoderre](https://twitter.com/LaurentGoderre)


## License
Copyright (c) 2014 Laurent Goderre, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on September 12, 2014._
