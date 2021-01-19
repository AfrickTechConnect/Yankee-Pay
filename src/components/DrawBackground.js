import React from "react";
import styled from "styled-components";

const Background = styled.div`
  display: none;
  @media screen and (max-width: 640px) {
    display: block;
    position: fixed;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

function DrawBackground(props) {
  return <Background></Background>;
}

export default DrawBackground;
