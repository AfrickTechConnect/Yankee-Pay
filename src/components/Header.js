import React from "react";
import styled from "styled-components";
import { Logo } from "../assets";
import { HiMenuAlt3 } from "react-icons/hi";
import { useMenuContext } from "../context";

const Ul = styled.ul`
  list-style: none;
  text-transform: uppercase;
  display: inline-flex;
`;

const ImageContainer = styled.div`
  object-fit: contain;
`;

function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useMenuContext();
  return (
    <header className="flex justify-between pt-4">
      <ImageContainer>
        <img
          className="w-64 -ml-9 md:-ml-0"
          src={Logo}
          alt="Logo for YankeePay"
        />
      </ImageContainer>

      <div className="hidden md:block mr-52 mt-8 ">
        <Ul className="space-x-16">
          <li className="cursor-pointer font-semibold">Home</li>
          <li className="cursor-pointer font-semibold">About Us</li>
          <li className="cursor-pointer font-semibold">Contact Us</li>
        </Ul>
      </div>
      <div className="block md:hidden mr-14 mt-6">
        <HiMenuAlt3
          className="h-8 w-8"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
    </header>
  );
}

export default Header;
