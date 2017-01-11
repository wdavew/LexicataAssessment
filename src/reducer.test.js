import reducer from './reducer';
import types from './actionTypes';

describe('reducer', () => {
  it('handles CHANGE_TAG_INPUT', () => {
    const initialState = {};
    const action = {
      type: types.CHANGE_TAG_INPUT,
      value: 'Tag name',
    };
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual({
      tagInput: 'Tag name',
    });
  });

  it('handles SUBMIT_TAG_INPUT', () => {
    const initialState = {
      tagInput: 'Tag',
      tags: [],
    };
    const action = {
      type: types.SUBMIT_TAG_INPUT,
    };
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual({
      tagInput: '',
      tags: [{
        label: 'Tag',
        color: '',
      }],
    });
  });

  it('handles SUBMIT_TAG_INPUT with duplicate input', () => {
    const initialState = {
      tagInput: 'Tag',
      tags: [{
        label: 'Tag',
        color: '',
      }],
    };
    const action = {
      type: types.SUBMIT_TAG_INPUT,
    };
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });

  it('handles REMOVE_TAG', () => {
    const initialState = {
      tagInput: '',
      tags: [{
        label: 'Tag',
        color: '',
      }],
    };
    const action = {
      type: types.REMOVE_TAG,
      label: 'Tag',
    };
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual({
      tagInput: '',
      tags: [],
    });
  });

  it('handles REMOVE_TAG when label does not exist', () => {
    const initialState = {
      tagInput: '',
      tags: [{
        label: 'Tag',
        color: '',
      }],
    };
    const action = {
      type: types.REMOVE_TAG,
      label: 'Nonexistant tag',
    };
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });
});
