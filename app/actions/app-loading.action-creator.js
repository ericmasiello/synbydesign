import { REQUEST_DATA, RECEIVED_DATA } from './types';

export function requestDataFromServer(){
  'use strict';
  return {
    type: REQUEST_DATA
  };
};

export function receiveDataFromServer(){
  'use strict';
  return {
    type: RECEIVED_DATA
  };
};