var $ = require('jquery');
var UIActions = require('../actions/uiActions');

var ajaxComplete = function ajaxCompleteHandler() {

    UIActions.COMPLETED_LOADING();
};

/**
 *
 * @param data
 */
var ajaxSuccess = function ajaxSuccessHandler(data) {

    if (this.self.action && typeof this.self.action.completed == 'function') {

        this.self.action.completed(data);

    } else if (typeof this.options.success == 'function') {

        this.options.success(data);
    }
};

/**
 *
 */
var ajaxFail = function ajaxFailHandler() {

    if (this.self.action && typeof this.self.action.failed == 'function') {

        this.self.action.failed();

    } else if (typeof this.options.error == 'function') {

        this.options.error();
    }
};

var $AjaxConfig = {
    dataType: 'json',
    complete: ajaxComplete,
    error: ajaxFail
};

/**
 * @description should be used in combination with Backbone Collection to override
 * 'sync' functionality.
 * Assumes a property on the instance 'this' be defined as this.action with corresponding
 * methods this.action.completed and this.action.failed
 * @type {{sync: Function}}
 */
var BackboneModelAjaxMixin = {

    sync: function (method, model, options) {

        options || (options = {});

        UIActions.LOAD();

        switch (method) {

            case 'read':

                //fetch collection
                $.ajax($.extend($AjaxConfig, {
                    method: 'get',
                    url: this.url + '/' + this.get('ID'),
                    context: {
                        self: this,
                        options: options
                    },
                    success: ajaxSuccess
                }));

                break;
        }
    }
};

module.exports = BackboneModelAjaxMixin;