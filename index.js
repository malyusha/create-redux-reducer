export default function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    // Set convention error by default to false.
    const error = typeof action.error === 'boolean' ? action.error : false;

    return reducer
      ? reducer(state, action.payload, typeof error === 'boolean' ? error : false)
      : state;
  };
}

