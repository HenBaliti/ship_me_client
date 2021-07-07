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
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import profileBlank from "../images/blank-profile-picture.png";
import ReactRoundedImage from "react-rounded-image";
import MenuListCompositionNav from "./DotsCompNavBar";
import styled from "styled-components";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <WrappNavs>
      <Nav>
        <UpNav>
          <TwoInRowLeft>
            <ShoppingCartIcon style={{ fill: "yellow" }} />
            <Logo href="/">Ship-ME</Logo>
            <LineDivider></LineDivider>

            <Menu isOpen={isOpen}>
              <Link to="/shipments">
                <MenuLink href="">Shipments</MenuLink>
              </Link>
              <Link to="/orders">
                <MenuLink href="">Orders</MenuLink>
              </Link>
            </Menu>
          </TwoInRowLeft>

          <TwoInRowRight>
            <NotificationsNoneOutlinedIcon
              style={{ fill: "white", flexDirection: "flex-end" }}
            />
            <MenuListCompositionNav />
            <ReactRoundedImage
              image={profileBlank}
              roundedColor="#447FFF"
              imageWidth="34"
              imageHeight="34"
              roundedSize="0"
              hoverColor="black"
            />
          </TwoInRowRight>
        </UpNav>
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
    </WrappNavs>
  );
};

export default Navbar;

export const TwoInRowLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;
export const TwoInRowRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

export const UpNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
