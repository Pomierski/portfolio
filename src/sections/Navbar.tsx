import React from "react";
import styled from "styled-components";
import Navlist from "../components/NavList";

const Wrapper = styled.div`
  display: none;
  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    display: flex;
    position: absolute;
    top: 4rem;
    left: 5px;
  }
  @media (max-height: 1000px) {
    top: 1rem;
  }
`;

const Navbar = () => (
  <Wrapper>
    <Navlist />
  </Wrapper>
);

export default Navbar;
