'use strict';
import { REQUEST_DATA, RECEIVED_DATA } from './types';

/**
 * @description Creates an action for generating a data request
 * from the server. This is used to inform our <Loading/> component
 * that it should display the loading bar
 * @returns {{type: REQUEST_DATA}}
 */
export function requestDataFromServer(){
  return {
    type: REQUEST_DATA
  };
};

/**
 * @description Creates an action for generating a data received
 * from the server. This is used to inform our <Loading/> component
 * that it should stop displaying the loading bar
 * @returns {{type: RECEIVED_DATA}}
 */
export function receiveDataFromServer(){  
  return {
    type: RECEIVED_DATA
  };
};
