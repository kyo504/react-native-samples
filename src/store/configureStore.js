import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';

const logger = createLogger();
export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(logger)
    // other store enhancers if any
  )
);
