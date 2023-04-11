import { compose, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
    sagaMiddleware,
    // ...((process.env.NODE_ENV === "development" && [logger]) || []),
];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);
// const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga);