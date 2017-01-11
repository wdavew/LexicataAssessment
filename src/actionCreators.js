import types from './actionTypes';

export const changeName = tagName => ({
  type: types.CHANGE_TAG_NAME,
  value: tagName,
});

export const submitTagName = () => ({
  type: types.SUBMIT_TAG_NAME,
});

export const displayTag = label => ({
  type: types.DISPLAY_TAG,
  label,
});

export const removeTag = label => ({
  type: types.REMOVE_TAG,
  label,
});

export const displayTagSelect = (val) => ({
  type: types.SET_DROPDOWN_DISPLAY,
  status: val,
});

export const selectTagColor = (color) => ({
  type: types.SELECT_TAG_COLOR,
  color,
});

export const submitTag = () => ({
  type: types.SUBMIT_TAG,
});
