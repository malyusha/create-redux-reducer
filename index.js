module.exports = function createReducer(initialState, reducerMap) {
  return function(state, action) {
    state = state || initialState;

    var reducer = reducerMap[action.type];

    // Set convention error by default to false.
    var error = typeof action.error === 'boolean' ? action.error : false;

    return reducer
      ? reducer(state, action.payload, error)
      : state;
  };
};

