/**
 * {{i18n}} <http://github.com/helpers/handlebars-helper-i18n>
 *
 * Copyright (c) 2014 Laurent Goderre <https://github.com/LaurentGoderre>
 * Licensed under the MIT License (MIT)
 */

'use strict';


/**
 * @param  {String} `key` The name of the property to use as context.
 * @param  {Object} `options`
 * @return {Object}
 */

exports.i18n = function (key, options) {
  options = options || {};
  options.hash = options.hash || {};

  var language;

  if (typeof key !== "string") {
    throw "{{i18n}} helper: invalid key. Object keys must be formatted as strings.";
  }

  if (typeof options.hash.language === "string") {
    language = options.hash.language;
  } else {
    language = this.language;
  }

  if (typeof language === "undefined") {
    throw "{{i18n}} helper: the 'language' parameter is not defined.";
  }

  if (typeof this[language] === "undefined") {
    throw "{{i18n}} helper: context object not defined for language '" + language + "'.";
  }

  if (typeof this[language][key] === "undefined") {
    throw "{{i18n}} helper: property '" + key + "' is not defined for language '" + language + "'.";
  }

  return this[language][key];
};
