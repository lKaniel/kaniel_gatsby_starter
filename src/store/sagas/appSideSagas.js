import { put, takeEvery} from "redux-saga/effects";
import {SET_OFFLINE_CLIENT_STATUS, SET_ONLINE_CLIENT_STATUS} from "../actions/actionTypes";
import {eventChannel} from "redux-saga";

const createListener = (eventName, def)=>{
    const onlineChannel = eventChannel((emitter) => {
        window.addEventListener(eventName, emitter);
        return () => window.removeEventListener(eventName, emitter);
    });
    return takeEvery(onlineChannel, def)
}

function setOnline(isOnline) {
    return function* online() {
        yield put({type: isOnline ? SET_ONLINE_CLIENT_STATUS : SET_OFFLINE_CLIENT_STATUS});
    }
}

export function* isOnlineSagaWatcher() {
    yield createListener("online", setOnline(true))
    yield createListener("offline", setOnline(false))
}