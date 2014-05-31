define([
    'jquery'
  , 'underscore'
  , 'backbone'
], function ($, _, Backbone) {
    'use strict';

    var HomeView = Backbone.View.extend({

       initialize: function () {

      }

      , render: function () {
          var html = '<h3>Welcome to the Home page.</h3>';
          this.$el.html(html);
          return this;
      }

    });

    return HomeView;
});

