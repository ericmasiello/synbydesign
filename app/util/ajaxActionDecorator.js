'use strict';

var UIActions = require('../actions/uiActions');

var ajaxComplete = function ajaxCompleteHandler() {

    UIActions.COMPLETED_LOADING();
};

var ajaxInit = function ajaxInitHandler(){

    UIActions.LOAD();
};

/**
 * @description Adds events [request, sync, and error] to a Backbone model
 * or collection that trigger various Ajax related Reflux Actions. This is used
 * to inform the uiStore that Ajax events are occurring and it should therfore
 * trigger the UI to display a 'Loading...' message
 * @param backboneInstance
 * @param action
 */
var ajaxActionDecorator = function(backboneInstance, action){

    backboneInstance.on('request', function(){

        ajaxInit();
    });

    backboneInstance.on('sync', function(){

        if( action && typeof action.completed === 'function' ){

            action.completed();
        }
        ajaxComplete();
    });

    backboneInstance.on('error', function(){

        if( action && typeof action.error === 'function' ){

            action.error();
        }
        ajaxComplete();
    });
};

module.exports = ajaxActionDecorator;