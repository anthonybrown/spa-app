define([
    'jquery'
  , 'underscore'
  , 'backbone'
], function ($, _, Backbone) {
    'use strict';

    var AboutView = Backbone.View.extend({

       initialize: function () {

      }

      , render: function () {
          var html = [
              '<h3>Welcome to the About page.</h3>'
            , '<p>This application is a single page application, built with Javascript\
                  and using Backbone to organize the code into a MV* paradigm.\
                  Also, require lazy loads our scripts as we need them.</p>\
               <p>This app was a joy to make, it might take a little more time to setup\
                  than your usual app, but once we have our models and views hooked up<br>\
                  to our Router</p>\
                <p>It makes adding functionality a trivial aspect. Our models listen for changes\
                    and updates the views.</p>'
          ]
          this.$el.html(html);
          return this;
      }

    });

    return AboutView;
});
