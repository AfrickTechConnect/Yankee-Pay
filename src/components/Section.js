import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background: ${(props) => props.bg || "#FFFFFF"};
`;

function Section({ background, height, children, ...otherProps }) {
  return (
    <>
      <Div
        className="h-full w-full pb-16"
        bg={background}
        height={height}
        {...otherProps}
      >
        {children}
      </Div>
    </>
  );
}

export default Section;
