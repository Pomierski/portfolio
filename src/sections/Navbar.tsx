import React from "react";
import styled from "styled-components";
import Navlist from "../components/NavList";

const Wrapper = styled.div`
  display: none;
  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    display: flex;
    height: ${(props) => props.theme.navbarHeight};
  }
`;

const Navbar = () => (
  <Wrapper>
    <Navlist />
  </Wrapper>
);

export default Navbar;
