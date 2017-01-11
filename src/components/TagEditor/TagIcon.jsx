import React, { Component } from 'react';

export default ({label, color, removeSelf}) => (
  <div className='tag-icon' style={{ backgroundColor: color }} >
    <span className='tag-label'>{label}</span>
    <button className='remove-button' onMouseDown={() => removeSelf(label)}>x</button>
  </div>
);
