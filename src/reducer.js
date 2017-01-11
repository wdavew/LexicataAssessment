import types from './actionTypes';
import tagsJSON from './api/tags.json';

const INITIAL_STATE = {
  availableTags: tagsJSON.tags,
  displayedTags: [],
  tagName: '',
  tagColor: '#0fade9',
  dropDownVisible: false,
  colorSelectVisible: false,
};

function tagExists(state) {
  const currentTag = state.tagName;
  const tagLabels = state.availableTags
    .concat(state.displayedTags)
    .filter(tag => tag)
    .map(tag => tag.label);
  return (tagLabels.includes(currentTag));
}

// add tag to array of available tags if it does not exist
function submitTagName(state) {
  if (tagExists(state) || !(state.tagName.length)) return state;
  return {
    ...state,
    colorSelectVisible: true,
  };
}

function moveTag(label, arrayFrom, arrayTo) {
  const moved = arrayFrom.filter(tag => tag.label === label);
  const newArrayFrom = arrayFrom.filter(tag => tag.label !== label);
  if (!moved.length) return { from: arrayFrom, to: arrayTo };
  return { from: newArrayFrom, to: arrayTo.concat(moved) };
}

// remove tag from array of displayed tags and replace it in available tags
// return unmodified state if targeted tag does not exist
function removeTag(state, action) {
  const moved = moveTag(action.label, state.displayedTags, state.availableTags);
  return { ...state, displayedTags: moved.from, availableTags: moved.to };
}

// remove tag from array of available tags and replace it in displayed tags
// return unmodified state if targeted tag does not exist
function displayTag(state, action) {
  const moved = moveTag(action.label, state.availableTags, state.displayedTags);
  return { ...state, displayedTags: moved.to, availableTags: moved.from };
}

function submitTag(state) {
  if (tagExists(state) || !(state.tagName.length)) return state;
  const newTag = {
    label: state.tagName,
    color: state.tagColor,
  };
  const displayedTags = state.displayedTags.concat([newTag]);
  return {
    ...state,
    displayedTags,
    tagName: '',
    tagColor: '#0fade9',
    colorSelectVisible: false,
  };
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_TAG_NAME:
      return { ...state, tagName: action.value };
    case types.SUBMIT_TAG_NAME:
      return submitTagName(state);
    case types.REMOVE_TAG:
      return removeTag(state, action);
    case types.DISPLAY_TAG:
      return displayTag(state, action);
    case types.SET_DROPDOWN_DISPLAY: {
      return { ...state, dropDownVisible: action.status };
    }
    case types.SELECT_TAG_COLOR:
      return { ...state, tagColor: action.color };
    case types.SUBMIT_TAG:
      return submitTag(state);
    default:
      return state;
  }
};
