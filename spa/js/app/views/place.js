define([
    'jquery'
  , 'underscore'
  , 'backbone'
  , 'app/collections/places'
  , 'app/templates'
  , 'app/collections/days'
], function ($, _, Backbone, PlacesCollection, Templates, DaysCollection) {
    'use strict';

    var PlaceView = Backbone.View.extend({

      template: Templates['place']

    , collection: new DaysCollection([])

    , initialize: function () {
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
        this.$bodyEl = this.$('.panel-body');
    }

    , render: function () {
        var that = this;
        this.collection.url = [
            'http://api.wunderground.com/api/'
          , '65c6079471b5de45'
          , '/forecast/q/'
          , this.model.get('countryCode')
          , '/'
          , this.model.get('name')
          , '.json'
        ].join('');

        this.collection.fetch({
            success: function (collection, response, options) {
              that.renderDays();
            }
          , error: function (collection, response, options) {
              alert('There has been an error somewhere.');
          }
        });

        return this;
    }
    , renderDays: function () {
          var daysHtml = [];
          this.collection.each(function (element, index, list) {
              daysHtml.push(
                  Templates['day'](element.toJSON())
              );
          });
          this.$bodyEl.html(daysHtml.join(''));
    }

  });

    return PlaceView;
});
