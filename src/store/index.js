import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer/Index'



export const initialState = {
    user: {
        id: null,
        username: null,
        first_name: null,
        last_name: null,
        role: null,
        time_created: null,
        time_updated: null,
    },

    category: {
        items: [],
    }
};
const enhancers = [];
const middleware = [
    thunk,
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    reducer,
    initialState,
    composedEnhancers
);

export default store




