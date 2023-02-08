import React from "react";

const CustomCurser = ({ outerRef, innerRef }) => {
  return (
    <>
      <div className="outer-cursor" ref={outerRef}></div>
      <div className="inner-cursor" ref={innerRef}></div>
    </>
  );
};

export default CustomCurser;
