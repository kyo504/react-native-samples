import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from '../reducers';

const myTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    console.log(inboundState);
    return { todos: inboundState.todos };
  },
  // transform state being rehydrated
  (outboundState, key) => {
    console.log(outboundState);
    return outboundState;
  },
  // define which reducers this transform gets called for.
  { whitelist: ['todo', 'counter'] }
);

const persistConfig = {
  key: 'root',
  storage,
  transforms: [myTransform],
  // whitelist: ['todo'],
  // blacklist: ['counter'],
  stateReconciler: autoMergeLevel2,
  debug: __DEV__,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const logger = createLogger();
  const store = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(logger)
      // other store enhancers if any
    )
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
