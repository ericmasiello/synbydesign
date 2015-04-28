var $ = require('jquery');
var UIActions = require('../actions/uiActions');

var $AjaxConfig = {
  dataType: 'json',
  complete: function(){

    UIActions.completedLoading();
  }
};

var AjaxMixin = {

  sync: function(method, model, options){

    var self = this;

    options || (options = {});

    UIActions.load();

    switch(method){

      case 'read':

        $.ajax($.extend($AjaxConfig, {
          method: 'get',
          url: self.url,
          success: function(data){

            //if( typeof options.success == 'function' ){
            //
            //  options.success(data);
            //}

            if( self.action && typeof self.action.completed == 'function' ){
              self.action.completed(data);
            }
          }
        }));

        break;
    }
  }
};

module.exports = AjaxMixin;