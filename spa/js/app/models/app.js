define([
    'backbone'
  , 'backbone.localStorage'
], function (Backbone) {
    'use strict';

    var AppModel = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage('AppSettings')
      , defaults: {
            'backgroundColor' : '#f0f0f0'
          , 'celsius'         : true
          , 'welcomeMessage'  : 'Welcome to Weather Watcher'
        }
    });

    return AppModel;
});
