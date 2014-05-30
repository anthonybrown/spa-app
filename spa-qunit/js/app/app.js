define([
    'jquery'
  , 'bootstrap'
], function ($) {
    'use strict';

    var id = 'content';

    var getId = function () {
      return id;
    }

     var getTimeString = function () {
        var date = new Date();
        return [date.getHours(), ':', date.getMinutes()].join('');
     };

     var initialize = function () {
        $('body').append('<div id="'+id+'" class="container-fluid"></div>');
      };

     var displayTime = function () {
        var html = [
            '<div class="alert alert-warning">'
            , '<button type="button" class="close" data-dismiss="alert"><strong>&times;</strong></button>'
            , 'The time is: '
            , getTimeString()
          , '</div>'
        ].join('');
        $('#' +id).html(html);
     };

    return {
        initialize: initialize
      , getId: getId
      , displayTime: displayTime
    }
});
