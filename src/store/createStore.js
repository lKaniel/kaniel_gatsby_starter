import {applyMiddleware, createStore} from 'redux';
import rootReducer from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/rootSaga";
import {CHANGE_MEDIA_QUERY} from "./actions/actionTypes";

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = composeWithDevTools({
    actionsBlacklist:[
        CHANGE_MEDIA_QUERY
    ]
});

const createMyStore = preloadedState => {
    const store = createStore(rootReducer, preloadedState, composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ));

    sagaMiddleware.run(rootSaga)

    return store
};

export default createMyStore;
