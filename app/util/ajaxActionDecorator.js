'use strict';

import UIActions from '../actions/uiActions';

const ajaxComplete = function ajaxCompleteHandler() {

    UIActions.COMPLETED_LOADING();
};

const ajaxInit = function ajaxInitHandler(){

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
export default function(backboneInstance, action){

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