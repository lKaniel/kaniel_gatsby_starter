import {SET_OFFLINE_CLIENT_STATUS, SET_ONLINE_CLIENT_STATUS} from "../actions/actionTypes";

const initialState = {
    isOnline: true
};

export default function appSideReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ONLINE_CLIENT_STATUS:
            return {
                ...state,
                isOnline: true
            }
        case SET_OFFLINE_CLIENT_STATUS:
            return {
                ...state,
                isOnline: false
            }
        default:
            return state;
    }
}
