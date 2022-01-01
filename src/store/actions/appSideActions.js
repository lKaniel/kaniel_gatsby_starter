import {
    CHANGE_MEDIA_QUERY,
    INNIT_EVENTS,
    SET_DARK_THEME, SET_LIGHT_THEME,
    SET_OFFLINE_CLIENT_STATUS,
    SET_ONLINE_CLIENT_STATUS
} from "./actionTypes";


export function startInnitEvents(element) {
    return {
        type: INNIT_EVENTS,
        element
    }
}

export function setOnlineClientStatus(isOnline) {
    return {
        type: isOnline ? SET_ONLINE_CLIENT_STATUS : SET_OFFLINE_CLIENT_STATUS
    }
}

export function changeMediaQueryStatus(name, isMatch) {
    return {
        type: CHANGE_MEDIA_QUERY,
        name,
        isMatch
    }
}

export function setWebsiteTheme(isDark){
    return{
        type: isDark ? SET_DARK_THEME : SET_LIGHT_THEME
    }
}
