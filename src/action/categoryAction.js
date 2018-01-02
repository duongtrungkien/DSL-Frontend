import { GET_CATEGORY } from './actionTypes'
import api from './api'
import axios from 'axios'

export function getAll() {
    return dispatch => {
        dispatch({
            type: GET_CATEGORY,
            data: {
                status: 'pending',
                context: 'get_category',
            }
        })

        axios.get(api.getCategories)
        .then(function (response) {
            console.log(response);
            if (response.data && response.data.success) {
                dispatch({
                    type: GET_CATEGORY,
                    data: {
                        status: 'success',
                        context: 'get all categories',
                        items: [...response.data.data],
                    }

                })
            }
            else {
                dispatch({
                    type: GET_CATEGORY,
                    data: {
                        status: 'fail',
                        context: 'get all categories',
                        error: response.data.error
                    }
                })
            }

        })
    }
}