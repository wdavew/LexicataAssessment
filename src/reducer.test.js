import reducer from './reducer';
import types from './actionTypes';

describe('reducer', () => {
  it('handles CHANGE_TAG_NAME', () => {
    const initialState = {};
    const action = {
      type: types.CHANGE_TAG_NAME,
      value: 'Tag name',
    };
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual({
      tagName: 'Tag name',
    });
  });

  it('handles SUBMIT_TAG_NAME', () => {
    const initialState = {
      tagName: 'Tag',
      colorSelectVisible: false,
      availableTags: [],
    };
    const action = {
      type: types.SUBMIT_TAG_NAME,
    };
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual({
      availableTags: [],
      tagName: 'Tag',
      colorSelectVisible: true,
    });
  });

  it('handles SUBMIT_TAG_INPUT with duplicate input', () => {
    const initialState = {
      tagName: 'Tag',
      availableTags: [{
        label: 'Tag',
        color: '',
      }],
      displayedTags: [],
      colorSelectVisible: false,

    };
    const action = {
      type: types.SUBMIT_TAG_NAME,
    };
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });

  it('handles SUBMIT_TAG_INPUT with tag already displayed', () => {
    const initialState = {
      tagName: 'Tag',
      displayedTags: [{
        label: 'Tag',
        color: '',
      }],
      availableTags: [],
      colorSelectVisible: false,

    };
    const action = {
      type: types.SUBMIT_TAG_NAME,
    };
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });

  it('handles REMOVE_TAG', () => {
    const initialState = {
      tagName: '',
      displayedTags: [{
        label: 'Tag',
        color: '',
      }],
      availableTags: [],
    };
    const action = {
      type: types.REMOVE_TAG,
      label: 'Tag',
    };
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual({
      tagName: '',
      displayedTags: [],
      availableTags: [{
        label: 'Tag',
        color: '',
      }],
    });
  });

  it('handles REMOVE_TAG when label does not exist', () => {
    const initialState = {
      tagName: '',
      displayedTags: [{
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

  it('handles DISPLAY_TAG', () => {
    const initialState = {
      tagName: '',
      displayedTags: [],
      availableTags: [{
        label: 'Tag',
        color: '',
      }],
    };
    const action = {
      type: types.DISPLAY_TAG,
      label: 'Tag',
    };
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual({
      tagName: '',
      availableTags: [],
      displayedTags: [{
        label: 'Tag',
        color: '',
      }],
    });
  });

  it('handles DISPLAY_TAG when label does not exist', () => {
    const initialState = {
      tagName: '',
      availableTags: [{
        label: 'Tag',
        color: '',
      }],
      displayedTags: [],
    };
    const action = {
      type: types.REMOVE_TAG,
      label: 'Nonexistant tag',
    };
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });

  it('handles DISPLAY_TAGSELECT', () => {
    const initialState = {
      dropDownVisible: false,
    };
    const action = {
      type: types.SET_DROPDOWN_DISPLAY,
      status: true,
    };
    let nextState = reducer(initialState, action);
    expect(nextState).toEqual({
      dropDownVisible: true,
    });
  });

  it('handles SELECT_TAG_COLOR', () => {
    const initialState = {
      tagColor: '#0fade9',
    };
    const action = {
      type: types.SELECT_TAG_COLOR,
      color: 'blue',
    }
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual({
      tagColor: 'blue',
    });
  });

  it('handles SUBMIT_TAG', () => {
    const initialState = {
      tagColor: 'blue',
      tagName: 'Tag',
      displayedTags: [],
      availableTags: [],
      colorSelectVisible: true,
    };
    const action = {
      type: types.SUBMIT_TAG,
    }
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual({
      tagColor: '#0fade9',
      tagName: '',
      displayedTags: [{
        label: 'Tag',
        color: 'blue',
      }],
      availableTags: [],
      colorSelectVisible: false,
    });
  });
});
