import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './app-reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
))(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
