import React, { Component } from 'react';

export default ({availableTags, visible, addTag}) => {
  const visibility = visible ? 'block' : 'none';

  const tags = availableTags.map((tag) => {
    const squareStyle = { backgroundColor: tag.color };
    return (
      <li key={tag.label} className="tag-select" onMouseDown={(e) => (e.preventDefault(), addTag(tag.label))}>
        <div className="color-square" style={squareStyle}></div>
        <span className='tag-display-label' >{tag.label}</span>
      </li>
    );
  });
  return (
    <ul id="tag-dropdown" style={{ "display": visibility }} >
      {tags}
    </ul>
  );
};
