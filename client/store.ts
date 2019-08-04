import {
  createStore,
  applyMiddleware,
  Reducer,
  combineReducers,
  Store,
  AnyAction,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IAppState {
  foo?: string;
}

const defaultState: IAppState = {
  foo: '',
};

const fooReducer: Reducer<string | undefined> = (state, action) => {
  switch (action.type) {
    case 'FOO':
      return 'foo';
    case 'BAR':
      return 'bar';
    case 'BAZ':
      return 'baz';
    default:
      return state;
  }
};

// ACTIONS
export const bar = () => {
  return { type: 'BAR' };
};
export const baz = () => {
  return { type: 'BAZ' };
};

type TCreateStore = (initialState?: IAppState) => Store<IAppState, AnyAction>;

export const initializeStore: TCreateStore = (state = defaultState) => {
  const store = createStore(
    combineReducers({
      foo: fooReducer,
    }),
    state,
    composeWithDevTools(applyMiddleware()),
  );

  return store;
};
