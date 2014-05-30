define([
    'jquery'
  , 'underscore'
  , 'backbone'
], function ($, _, Backbone) {
    'use strict';

    var Router = Backbone.Router.extend({
      routes: {
          ''             : 'goToDash'
        , 'home'         : 'goToHome'
        , 'dash'         : 'goToDash'
        , 'dash/:place'  : 'goToDash'
        , 'about'        : 'goToAbout'
      }

      , initialize: function (view) {
          this.appView = view;
      }

      , goToDash: function (place) {
          this.appView.setPage('dash');
          if (place) {
            alert('Weather detail for ' + place);
          }
      }

      , goToAbout: function () {
          this.appView.setPage('about');
      }

      , goToHome: function () {
          this.appView.setPage('home');
      }


    });

    return Router;
});
