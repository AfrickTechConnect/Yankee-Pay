import React, { useEffect } from "react";
import styled from "styled-components";
import { Logo } from "../assets";
import { FaHome, FaInfo, FaUserFriends } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useMenuContext } from "../context";

const StyledDrawNavigation = styled.div`
  display: none;

  @media screen and (max-width: 640px) {
    display: block;
    z-index: 200;
    width: 75%;
    height: 100%;
    background: #fdfdfd;
    top: 0;
    right: 0;
    position: fixed;
  }
`;

const Ul = styled.ul`
  list-style: none;
`;
const Li = styled.li`
  display: flex;
  border-bottom: 1px solid black;
  padding: 20px;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  object-fit: "contain";
`;

function DrawNavigation(props) {
  const [isMenuOpen, setIsMenuOpen] = useMenuContext();

  useEffect(() => {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => window.scrollTo(x, y);

    return () => {
      window.onscroll = () => {};
    };
  }, []);

  return (
    <StyledDrawNavigation>
      <ImageContainer className="flex justify-center">
        <img src={Logo} alt="Logo" className="h-28" />
      </ImageContainer>
      <div className="mt-16 flex flex-col text-lg font-normal">
        <Ul>
          <Li>
            <FaHome className="h-8 w-8 mr-16 text-gray-700" />
            <p className="mt-1 text-gray-900">Home</p>
          </Li>
          <Li>
            <FaInfo className="h-8 w-8 mr-6 text-gray-700" />
            <p className="mt-1 text-gray-900">About Us</p>
          </Li>
          <Li>
            <FaUserFriends className="h-8 w-8 mr-6 text-gray-700" />
            <p className="mt-1 text-gray-900">Contact Us</p>
          </Li>
        </Ul>
      </div>
      <div className="flex justify-center mt-10 ">
        <div
          className="px-8 text-2xl font-medium py-5 text-gray-900"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <ImCancelCircle className="w-8 h-8 text-red-700" />
        </div>
      </div>
    </StyledDrawNavigation>
  );
}

export default DrawNavigation;
