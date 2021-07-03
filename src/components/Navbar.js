import React, { useState } from "react";
import {
  MenuLink,
  MenuLink2,
  MarginGrey,
  Nav,
  Nav2,
  WrappNavs,
  Logo,
  Menu,
  Hamburger,
  LineDivider,
} from "./NavBarCommon";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <WrappNavs>
      <Nav>
        <ShoppingCartIcon style={{ fill: "yellow" }} />
        <Logo href="/">Ship-ME</Logo>
        <LineDivider></LineDivider>
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
