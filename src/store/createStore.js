import {applyMiddleware, createStore} from 'redux';
import rootReducer from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import {isOnlineSagaWatcher} from "./sagas/appSideSagas";


const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = composeWithDevTools({

});


const createMyStore = preloadedState => {
    const store =  createStore(rootReducer, preloadedState, composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ));

    sagaMiddleware.run(isOnlineSagaWatcher)

    return store
};

export default createMyStore;