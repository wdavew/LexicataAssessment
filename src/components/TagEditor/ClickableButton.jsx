import React, { Component } from 'react';

export default ({label, handleClick, idName}) => (
  <button className='clickable-btn' onMouseDown={handleClick} id={idName}> {label} </button>
);
