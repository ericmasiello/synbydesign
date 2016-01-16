import {createStore, combineReducers} from 'redux';
//import todos from './reducers/todos';
import appLoading from '../reducers/appLoadingReducer';

const combinedState = combineReducers({
  appLoading
});

export default createStore(combinedState);
