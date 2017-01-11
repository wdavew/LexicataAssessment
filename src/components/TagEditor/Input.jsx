import React, { Component } from 'react';

export default ({value, handleChange, dropdown, }) => (
  <input type="text" value={value} onChange={(e) => handleChange(e.target.value)}
    onFocus={() => dropdown(true)}
    onBlur={() => dropdown(false)}
    placeholder="Type to add a tag." />
);
