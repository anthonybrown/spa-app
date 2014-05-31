require.config({
  paths: {
      'jquery'                : 'vendor/jquery.min'
    , 'underscore'            : 'vendor/underscore'
    , 'backbone'              : 'vendor/backbone'
    , 'bootstrap'             : 'vendor/bootstrap'
    , 'backbone.localStorage' : 'vendor/backbone.localStorage'
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
  }
});

require(
  [
    'backbone'
  , 'app/app'
  , 'bootstrap'
  ]
, function (Backbone, App) {
    'use strict';
    App.initialize();
});

