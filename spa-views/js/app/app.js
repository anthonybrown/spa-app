define([
   'app/views/app'
], function (AppView) {
    'use strict';

     var initialize = function () {
        var appView = new AppView();
        $('body').append(appView.el);
     };

    return {
        initialize: initialize
    }
});
