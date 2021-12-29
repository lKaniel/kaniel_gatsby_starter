import {put, takeEvery, take, call} from "redux-saga/effects";
import {SET_OFFLINE_CLIENT_STATUS, SET_ONLINE_CLIENT_STATUS, START_CHECK_ONLINE} from "../actions/actionTypes";
import {eventChannel} from "redux-saga";

const createListener = (eventName, def, element) => {
    const onlineChannel = eventChannel((emitter) => {
        element.addEventListener(eventName, emitter);
        return () => element.removeEventListener(eventName, emitter);
    });
    return takeEvery(onlineChannel, def)
}

function setOnline(isOnline) {
    return function* online() {
        yield put({type: isOnline ? SET_ONLINE_CLIENT_STATUS : SET_OFFLINE_CLIENT_STATUS});
    }
}

function* innitListeners(element) {
    yield createListener("online", setOnline(true), element)
    yield createListener("offline", setOnline(false), element)

}

function* isOnlineSagaWatcher() {
    const {element} = yield take(START_CHECK_ONLINE)
    yield call(innitListeners, element)
}

export function* appSideSaga() {
    yield call(isOnlineSagaWatcher)
}
