import types from './actionTypes';

const INITIAL_STATE = {
  tags: [],
  tagInput: '',
};

// add tag to collection if not already added
function submitInput(state) {
  const currentTag = {
    label: state.tagInput,
    color: '',
  };
  const tagLabels = state.tags.map(tag => tag.label);
  if (tagLabels.includes(currentTag.label)) return state;
  return { ...state, tagInput: '', tags: state.tags.concat(currentTag) };
}

// remove tag from collection based on provided label
function removeTag(state, action) {
  const labelToRemove = action.label;
  const newTags = state.tags.filter(tag => tag.label !== labelToRemove);
  return { ...state, tags: newTags };
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_TAG_INPUT:
      return { ...state, tagInput: action.value };
    case types.SUBMIT_TAG_INPUT:
      return submitInput(state);
    case types.REMOVE_TAG:
      return removeTag(state, action);
    default:
      return state;
  }
};
