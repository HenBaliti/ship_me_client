import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <WrappNavs>
      <Nav>
        <ShoppingCartIcon style={{ fill: "yellow" }} />
        <Logo href="">Ship-ME</Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>

        <Menu isOpen={isOpen}>
          <Link to="/shipments">
            <MenuLink href="">Shipments</MenuLink>
          </Link>
          <Link to="/orders">
            <MenuLink href="">Orders</MenuLink>
          </Link>
        </Menu>

        <NotificationsNoneOutlinedIcon
          style={{ fill: "white", flexDirection: "flex-end" }}
        />
      </Nav>
      <Nav2>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>

        <Menu isOpen={isOpen}>
          <Link to="/profile">
            <MenuLink2 href="">Profile</MenuLink2>
          </Link>
          <Link to="/company">
            <MenuLink2 href="">Company</MenuLink2>
          </Link>
          <Link to="/account">
            <MenuLink2 href="">Account</MenuLink2>
          </Link>
          <Link to="/companies">
            <MenuLink2 href="">Companies</MenuLink2>
          </Link>
        </Menu>
      </Nav2>
      <MarginGrey></MarginGrey>
    </WrappNavs>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1rem 1.5rem;
  display: -webkit-inline-box;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 0.8rem;
  &:hover {
    color: #7b7fda;
  }
`;
const MenuLink2 = styled.a`
  padding: 1rem 1.5rem;
  display: -webkit-inline-box;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 0.8rem;
  &:hover {
    color: #7b7fda;
    border-bottom: 5px solid #fff;
  }
`;

const MarginGrey = styled.div`
  display: -webkit-inline-box;
  align-items: center;

  background-color: black;
  justify-content: flex-start;
  position: absolute;
  width: 100%;
  height: 0.4%;
  padding: 0 2rem;
`;
const Nav = styled.div`
  padding: 0 2rem;
  display: -webkit-inline-box;
  align-items: center;
  flex-wrap: wrap;
  background-color: #096f9f;
  justify-content: flex-start;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
`;
const Nav2 = styled.div`
  padding: 0 0rem;
  display: -webkit-inline-box;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fff;
  justify-content: flex-start;
  width: 100%;
  left: 0;
  right: 0;
`;

const WrappNavs = styled.div`
  flex-direction: column;
  display: flex; /* establish flex container */
  flex-wrap: nowrap;
`;

const Logo = styled.a`
  padding: 1rem 0.5rem;
  color: white;
  text-decoration: none;
  font-weight: 600;
  align-items: center;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: flex-start;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: rgb(68, 127, 255);
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
