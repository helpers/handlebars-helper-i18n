/**
 * {{i18n}} <http://github.com/helpers/handlebars-helper-i18n>
 *
 * Copyright (c) 2014 Laurent Goderre <https://github.com/LaurentGoderre>
 * Licensed under the MIT License (MIT)
 */

var should = require('should');
var Handlebars = require('handlebars');
var helpers = require('./index');

var context = {
  language: 'en',
  en: {key: 'value'},
  fr: {key: 'valeur'}
};

Handlebars.registerHelper("i18n", helpers.i18n);


describe('i18n helper', function () {
  it('should take a key and return for the default language', function () {
    var template = Handlebars.compile('{{i18n "key"}}');
    template(context).should.eql('value');
  });

  it('should take a key and return for the override language', function () {
    var template = Handlebars.compile('{{i18n "key" language="fr"}}');
    template(context).should.equal('valeur');
  });
});

describe('errors:', function () {
  it('should throw an error when an invalid key is passed:', function () {
    var template = Handlebars.compile('{{i18n foo}}');
    try {
      template();
    } catch(err) {
      err.should.equal("{{i18n}} helper: invalid key. Object keys must be formatted as strings.");
    }
  });

  it('should throw an error when an empty context is passed.', function () {
    var template = Handlebars.compile('{{i18n "key" language="fr"}}');
    try {
      template({});
    } catch(err) {
      err.should.equal("{{i18n}} helper: context object not defined for language 'fr'.");
    }
  });

  it('should throw an error when no language is undefined.', function () {
    var template = Handlebars.compile('{{i18n "key"}}');
    try {
      template({en: {key: 'value'}, fr: {key: 'valeur'} });
    } catch(err) {
      err.should.equal("{{i18n}} helper: the 'language' parameter is not defined.");
    }
  });

  it('should throw an error when the given property is missing.', function () {
    var template = Handlebars.compile('{{i18n "word" language="fr"}}');
    try {
      template({language: 'en', en: {word: 'value'}, fr: {}});
    } catch(err) {
      err.should.equal("{{i18n}} helper: property 'word' is not defined for language 'fr'.");
    }
  });
});