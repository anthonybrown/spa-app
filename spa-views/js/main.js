require.config({
    paths: {
        'jquery': 'vendor/jquery.min'
      , 'underscore': 'vendor/underscore'
      , 'backbone': 'vendor/backbone'
      , 'bootstrap': 'vendor/bootstrap'
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

require([
    'backbone'
  , 'app/app'
  , 'bootstrap'
],  function (Backbone, App, bootstrap) {
      'use strict';

      App.initialize();
      console.log(App);
});
