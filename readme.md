# create-redux-reducer

## Installation
`npm install create-redux-reducer --save-dev`

## Description
Creates reducer actions object where you can describe actions as computed keys.
Receives 2 parameters: the initial state of reducer and object with callbacks for each type of action.
Each type callback receives 3 parameters: current state, payload and error. In your action creators you must
always return an object with type and payload keys to follow the [actions convention](https://github.com/acdlite/redux-actions).

## Usage
```
import createReducer from 'redux-create-reducer';
...

// reducers/auth.js
const initialState = {
    isAuthorized: false,
    isLoading: false,
    error: false,
    user: {}
};

export default createReducer(initialState, {
    [LOGIN_REQUEST]: (state, payload) => ({
        ...state, isLoading: true
    }),
    [LOGIN_SUCCESS]: (state, payload) => ({
        ...state, isLoading: false, isAuthorized: true, user: payload, error: false
    }),
    [LOGIN_FAILURE]: (state, payload) => ({
        ...state, error: payload, user: {}, isAuthorized: false, isLoading: false
    })
});
```
