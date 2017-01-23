import expect from 'expect';
import createReducer from './index';

describe('createReducer', () => {
  it('returns initial state when no types match', () => {
    const reducersMap = {};
    const initialState = {some: 'value'};
    const reduce = createReducer(initialState, {});

    const newState = reduce(undefined, reducersMap);

    expect(newState).toEqual(initialState);
  });

  it('returns new state if types match', () => {
    const constants = {
      SET_KEY: 'SET_KEY'
    };

    const reducerMap = {
      [constants.SET_KEY]: (state, payload) => ({
        ...state, some: payload
      })
    };

    const reducer = createReducer({some: 'key'}, reducerMap);
    const state = reducer(undefined, {});

    expect(reducer(state, {type: constants.SET_KEY, payload: 5})).toEqual({some: 5});
  });
});