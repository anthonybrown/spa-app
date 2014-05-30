define([
    'backbone'
], function (Backbone) {
    'use strict';

    var AppModel = Backbone.Model.extend({
        defaults: {
            'backgroundColor': '#f0f0f0'
          , 'celsius': true
          , 'welcomeMessage': 'Welcome to Weather Watcher'
        }
    });

    return AppModel;
});
