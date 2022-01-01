import {
    CHANGE_MEDIA_QUERY, SET_DARK_THEME, SET_LIGHT_THEME,
    SET_OFFLINE_CLIENT_STATUS,
    SET_ONLINE_CLIENT_STATUS
} from "../actions/actionTypes";

const initialState = {
    darkTheme: false,
    isOnline: true,
    queries: {},
};

export function getQueryByName(queries, name) {
    const query = queries.find(element => element.name === name)
    return query.isMatch
}

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
        case CHANGE_MEDIA_QUERY:
            return {
                ...state,
                queries: {
                    ...state.queries,
                    [action.name]: action.isMatch
                }
            }
        case SET_DARK_THEME:
            return {
                ...state,
                darkTheme: true
            }
        case SET_LIGHT_THEME:
            return {
                ...state,
                darkTheme: false
            }
        default:
            return state;
    }
}
