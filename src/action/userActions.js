import axios from 'axios'
import {LOGIN, LOGOUT} from './actionTypes'
import api from './api'
import {initialState} from "../store";


export function login(username, password) {

    console.log(username, password)

    return dispatch => {
        dispatch({
            type: LOGIN,
            data: {
                status: 'pending',
                context: 'login',
            }
        })

        axios.post(api.login, {
            username,
            password,
        })
        .then(function (response) {
            console.log(response);
            if (response.data && response.data.success) {
                dispatch({
                    type: LOGIN,
                    data: {
                        status: 'success',
                        context: 'login',
                        ...response.data.data
                    }

                })
            }
            else {
                dispatch({
                    type: LOGIN,
                    data: {
                        status: 'fail',
                        context: 'login',
                        error: response.data.error
                    }
                })
            }

        })
    }
}

export function logout() {
     return dispatch => {
         dispatch({
             type: LOGOUT,
             data: {
                 status: 'success',
                 context: 'logout',
                 ...initialState.user
             }
         })
     }
}
