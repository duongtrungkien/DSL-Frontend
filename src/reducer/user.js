import {LOGIN} from "../action/actionTypes";

export default function user(state={}, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {...action.data});
        default:
            return state
    }
}