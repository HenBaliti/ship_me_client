import styled from "styled-components";

export const LineDivider = styled.div`
  border-left: 1px solid white;
  margin-left: 6px;
  height: 30px;
`;

export const MenuLink = styled.a`
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
export const MenuLink2 = styled.a`
  padding: 1rem 1.5rem;
  display: -webkit-inline-box;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 0.8rem;
  &:hover {
    color: #096f9f;
    border-bottom: 5px solid #fff;
  }
`;

export const MarginGrey = styled.div`
  display: -webkit-inline-box;
  align-items: center;

  background-color: black;
  justify-content: flex-start;
  position: absolute;
  width: 100%;
  height: 0.4%;
  padding: 0 2rem;
`;
export const Nav = styled.div`
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
export const Nav2 = styled.div`
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

export const WrappNavs = styled.div`
  flex-direction: column;
  display: flex; /* establish flex container */
  flex-wrap: nowrap;
`;

export const Logo = styled.a`
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

export const Menu = styled.div`
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

export const Hamburger = styled.div`
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

export const ButtonLogOut = styled.button`
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;
