const INITIAL_STATE = {
    authenticated : '', // we used string for authentication instead of boolean so that we can use token based authentication
    errorMessage : ''
}

export default function ( state = INITIAL_STATE, action) {
    return state;
}