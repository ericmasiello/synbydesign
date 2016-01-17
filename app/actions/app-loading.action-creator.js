import { REQUEST_DATA, RECEIVED_DATA } from './types';

export function requestDataFromServer(){
  return {
    type: REQUEST_DATA
  }
};

export function receiveDataFromServer(){
  return {
    type: RECEIVED_DATA
  }
};