import React, { Component } from 'react';

export default ({value, handleChange}) => (
  <input type="text" value={value} onChange={(e) => handleChange(e.target.value)}
    placeholder="Type to add a tag." />
);
