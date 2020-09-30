import {AUTH_USER} from '../components/actions/types'

const INITIAL_STATE = {
    authenticated : '', // we used string for authentication instead of boolean so that we can use token based authentication
    errorMessage : ''
}

export default function ( state = INITIAL_STATE, action) {
    switch(action.type){
        case AUTH_USER:
            return {...state, authenticated: action.payload}
        default:
            return state;
    }
}