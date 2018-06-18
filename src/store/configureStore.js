import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from '../reducers';

const logger = createLogger();
export default createStore(reducers, undefined, applyMiddleware(logger));
