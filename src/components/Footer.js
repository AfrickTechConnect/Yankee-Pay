import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const StyledFooter = styled.footer`
  background-color: #565ee1;
`;

const Ul = styled.ul`
  list-style: none;
  text-align: center;
`;

function Footer(props) {
  return (
    <StyledFooter className="md:px-20 py-5 flex flex-col md:flex-row md:justify-between">
      <div className="text-white mt-3">
        <h1 className="text-center text-white font-semibold text-2xl">
          YankeePay
        </h1>
        <p className="text-lg mt-4 font-normal mb-5  md:w-96 mx-5">
          YankeePay is a social payments app that allows you pay for goods and
          services with your favourite cryptocurrency.
        </p>
        <div className="flex justify-center md:justify-start md:ml-5 mt-3 space-x-3">
          <FaFacebook className="w-8 h-8" />
          <FaTwitter className="w-8 h-8" />
          <FaInstagram className="w-8 h-8" />
          <FaLinkedin className="w-8 h-8" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-10 pb-4">
        <div className="flex flex-col mt-5  text-white ">
          <div className="text-center text-2xl font-semibold mb-2">About</div>

          <Ul className="md:space-y-4 mt-1">
            <li>Apps</li>
            <li>Personal</li>
            <li>Join our Community</li>
          </Ul>
        </div>
        <div className="text-white mt-5">
          <div className="text-center text-2xl font-semibold mb-2">Support</div>

          <Ul className="md:space-y-4 mt-3">
            <li>Support Center</li>
            <li>Documentation</li>
            <li>Privacy Policy</li>
          </Ul>
        </div>
        <div className="text-white mt-5 mb-10">
          <div className="text-center text-2xl font-semibold ">Contact</div>

          <Ul className="md:space-y-4 mt-3">
            <li>About Us</li>
            <li>Blog</li>
            <li>Terms and condition</li>
          </Ul>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
