import React from "react";

const SVG = ({ // Looks like this is the props being passed in, or not being passed in
  style = { 
      padding: '32px',
      margin: '-32px',
      display: 'block', 
      fill: 'rgb(72, 72, 72)',
  },
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = '0 0 18 18',
  onClick = "",
}) => (
  <svg
    onClick={onClick}
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
    />
  </svg>
);
export default SVG;
