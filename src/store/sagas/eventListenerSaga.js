import {put, takeEvery, take, call, fork} from "redux-saga/effects";
import {
    INNIT_EVENTS
} from "../actions/actionTypes";
import {eventChannel} from "redux-saga";
import {changeMediaQueryStatus, setOnlineClientStatus} from "../actions/appSideActions";

/**
 * This is saga that used for tracking events.
 * Here you can specify the event list that will be tracked.
 * @property {string} name - Name of the event.
 * @property {function} def - Function for the event.
 */

const listeners = [
    {name: "online", def: setOnline(true)},
    {name: "offline", def: setOnline(false)},
    // {name: "storage", def: event => console.log(event)}
]

const queries = [
    {name: "mobile", query: "screen and (max-width: 600px)"},
    {name: "tablet", query: "screen and (min-width: 601px) and (max-width: 1024px)"},
    {name: "laptop", query: "screen and (min-width: 1025px) and (max-width: 1440px)"},
    {name: "wide", query: "screen and (min-width: 1441px)"},
    {name: "prefersDarkColorScheme", query: "(prefers-color-scheme: dark)"}
]

function setOnline(isOnline) {
    return function* online() {
        yield put(setOnlineClientStatus(isOnline));
    }
}

function* setIsMatch(name, isMatch) {
    yield put(changeMediaQueryStatus(name, isMatch))
}

/**
 * Creates query status in store which dynamically changes in event listener
 * @param name
 * @param query
 * @param element
 */

function* addQueryListener({name, query, element}) {
    const list = yield element.matchMedia(query)
    yield setIsMatch(name, list.matches)
    yield createListener(
        "change",
        e => setIsMatch(name, e.matches),
        list
    )
}

/**
 * Creates channel for given event listener
 * @param {string} eventName - Name of the event.
 * @param {function} def - Function for the event.
 * @param {Object} element - Element from which event will be listened.
 */

const createListener = (eventName, def, element) => {
    const onlineChannel = eventChannel((emitter) => {
        element.addEventListener(eventName, emitter);
        return () => element.removeEventListener(eventName, emitter);
    });
    return takeEvery(onlineChannel, def)
}

/**
 * Sets up event channels from given list
 * @param {Object[]} listeners - Event names and defs array.
 * @param {Object} element - Element from which event will be listened.
 */

function* setupListeners({listeners, element}) {
    for (let i = 0; i < listeners.length; i++) {
        const {name, def} = listeners[i]
        yield createListener(name, def, element)
    }
}

/**
 *
 * @param queries
 * @param element
 */

function* setupMediaListeners({queries, element}) {
    for (let i = 0; i < queries.length; i++) {
        const {name, query} = queries[i]
        yield fork(addQueryListener, {name, query, element})
    }
}

export function* eventListenerSaga() {
    const {element} = yield take(INNIT_EVENTS)
    yield fork(setupListeners, {
        element,
        listeners
    })
    yield call(setupMediaListeners, {
        element,
        queries
    })
}
