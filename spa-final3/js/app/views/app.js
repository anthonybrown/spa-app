define([
    'jquery'
  , 'underscore'
  , 'backbone'
  , 'app/views/home'
  , 'app/views/dash'
  , 'app/views/about'
  , 'app/views/settings'
], function ($, _, Backbone, HomeView, DashView, AboutView, SettingsView) {
  'use strict';

  var AppView = Backbone.View.extend({
      id: 'app-view'

    , html: [
        , '<div class="navbar navbar-inverse navbar-fixed-top" roll="navigation">'
          , '<div class="container">'
            , '<div class="navbar-header">'
              , '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'
                , '<span class="sr-only">Toggle navigation</span>'
                , '<span class="icon-bar"></span>'
                , '<span class="icon-bar"></span>'
                , '<span class="icon-bar"></span>'
                , '<span class="icon-bar"></span>'
              , '</button>'
              , '<a class="navbar-brand" href="#">Weather Watcher</a>'
            , '</div>'
            , '<div class="collapse navbar-collapse">'
              , '<ul class="nav navbar-nav">'
                , '<li id="nav-home"><a href="#home">Home</a></li>'
                , '<li id="nav-dash"><a href="#dash">Dashboard</a></li>'
                , '<li id="nav-about"><a href="#about">About</a></li>'
              , '</ul>'
              , '<h5 class="navbar-text pull-right"></h5>'
            , '</div>'
            , '<button type="button" id="btn-settings" class="btn btn-primary"\
                  style="float:right; margin: 10px;">Settings</button>'
          , '</div>'
        , '</div>'
      , '<div id="content" class="container-fluid"></div>'
      ].join('')

      , events: {
            'click #btn-settings': 'openSettings'
      }
      , views: {}

      , initialize: function () {
          this.listenTo(this.model, 'change', this.render);

          this.views['about'] = new AboutView({
              id: 'page-about'
            , className: 'page-view'
          });

          this.views['dash'] = new DashView({
              id: 'page-dash'
            , className: 'page-view'
          });

          this.views['home'] = new HomeView({
              id: 'page-home'
            , className: 'page-view'
          });

        this.$el.append(this.html);
        this.$('#content').append(this.views['home'].render().el);
        this.$('#content').append(this.views['about'].render().el);
        this.$('#content').append(this.views['dash'].render().el);
      }
      , render: function () {
          this.$el.css('background-color', this.model.get('backgroundColor'));
          this.$('.navbar-text').html(this.model.get('welcomeMessage'));

          var tempType = this.model.get('celsius') ? 'celsius' : 'fahrenheit';
          this.$el.removeClass('celsius fahrenheit');
          this.$el.addClass(tempType);
          return this;
      }
      , openSettings: function (e) {
            var modal = new SettingsView({
                title : 'Application Settings'
              , id    : 'modal-settings'
              , model : this.model
            });
            modal.show();
      }
      , setPage: function (page) {
          this.$('.nav li').removeClass('active');
          this.$('.page-view').hide();
          this.$('#page-'+ page).show();
          this.$('#nav-' + page).addClass('active');
      }

  });

  return AppView;
});
