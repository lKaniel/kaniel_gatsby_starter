import {START_CHECK_ONLINE} from "./actionTypes";


export function startCheckOnline(element){
    return{
        type: START_CHECK_ONLINE,
        element
    }
}
