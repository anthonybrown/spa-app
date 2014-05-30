require.config({
    paths: {
        'jquery'     : 'vendor/jquery.min'
      , 'underscore' : 'vendor/underscore'
      , 'backbone'   : 'vendor/backbone'
      , 'bootstrap'  : 'vendor/bootstrap'
      , 'QUnit'      : 'vendor/qunit'
    }

    , shim: {
          'underscore': {
              exports: '_'
          }
        , 'backbone': {
            deps: [
                'underscore'
              , 'jquery'
            ]
          , exports: 'Backbone'
        }
        , 'bootstrap': {
              deps: [
                'jquery'
              ]
        }
        , 'QUnit': {
              exports: 'QUnit'
            , init: function () {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        }
    }
});

require([
    'QUnit'
  , 'tests/utilsTest'
],  function (QUnit, utilsTest) {
      'use strict';

      utilsTest.run();
      QUnit.load();
      QUnit.start();

});
