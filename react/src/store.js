import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";

import rootSaga from './sagas';

import  rootReducer  from './reducers';


const configureStore = () =>{
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(rootReducer,
            applyMiddleware(sagaMiddleware)),
            runSaga: sagaMiddleware.run(rootSaga)
    };
};
 export default configureStore;