define([
    'jquery'
  , 'underscore'
  , 'backbone'
  , 'app/views/counter'
], function ($, _, Backbone, CounterView) {
  'use strict';

  var AppView = Backbone.View.extend({
      id: 'app-view'

    , html: [
        , '<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">'
          , '<div class="container">'
            , '<div class="navbar-header">'
              , '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'
                , '<span class="sr-only">Toggle navigation</span>'
                , '<span class="icon-bar"></span>'
                , '<span class="icon-bar"></span>'
                , '<span class="icon-bar"></span>'
                , '<span class="icon-bar"></span>'
              , '</button>'
              , '<a class="navbar-brand" href="#">Weather Wather</a>'
            , '</div>'
            , '<div class="collapse navbar-collapse">'
              , '<ul class="nav navbar-nav">'
                , '<li id="nav-home" class="active"><a href="#home">Home</a></li>'
                , '<li id="nav-dash"><a href="#dash">Dashboard</a></li>'
                , '<li id="nav-about"><a href="#about">About</a></li>'
              , '</ul>'
            , '</div>'
          , '</div>'
        , '</div>'
      , '<div id="content" class="container"></div>'
      ].join('')

    , events: {
          'click #nav-dash': 'onNavDash'
        , 'click #nav-about': 'onNavAbout'
        , 'click #nav-home': 'onNavHome'
      }

    , views: {}

    , initialize: function () {
        this.views['counter'] = new CounterView({
            id: 'counter-widget'
          , className: 'counter-widget well'
        });

        this.$el.append(this.html);
        this.$('#content').append(this.views['counter'].render().el);
      }

    , onNavDash: function (e) {
        e.preventDefault();
        console.log('Navigatoin button clicked, Yay!');
      }

    , onNavAbout: function (e) {
        e.preventDefault();
        console.log('About button Clicked, Yay!')
      }
    , onNavHome: function (e) {
        e.preventDefault();
        console.log('Home button Clicked, Yay!')
      }

  });

  return AppView;
});

