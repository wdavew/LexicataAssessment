import React, { Component } from 'react';

const COLORS = [
  '#0D40D9',
  '#0FADE9',
  '#F6524F',
  '#9F0000',
  '#05D9B5',
  '#00C361',
  '#FFCF2E',
  '#FF7A1D',
  '#B372E6',
  '#5621A2',
  '#8C8D91',
  '#3E4042',
];

export default ({selectColor, visible}) => {
  const visibility = visible ? 'block' : 'none';
  const colors = COLORS.map((hex) => {
    return (
      <button className='color-select-square'
        style={{ "backgroundColor": hex }}
        onClick={() => selectColor(hex)} >
      </button >
    );
  });
  return (
    <div id="color-select" style={{ "display": visibility }}>
      {colors}
    </div>
  );
};
