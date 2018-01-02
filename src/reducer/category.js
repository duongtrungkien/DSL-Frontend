import {GET_CATEGORY} from "../action/actionTypes";


export default function category(state={}, action) {
    switch (action.type){
        case GET_CATEGORY:
            return Object.assign({}, state, {...action.data});
        default:
            return state
    }
}