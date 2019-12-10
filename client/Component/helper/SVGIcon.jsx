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
  viewBox = '0 0 24 24',
  onClick = ""
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
      d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
    />
  </svg>
);
export default SVG;
