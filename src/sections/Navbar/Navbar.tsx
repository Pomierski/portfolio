import styled from "styled-components";
import { Navlist } from "../../components/NavList";
import { navItems } from "./shared/navItems";

const Wrapper = styled.div`
  display: none;
  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    display: flex;
    height: ${(props) => props.theme.navbarHeight};
  }
`;

export const Navbar = () => (
  <Wrapper>
    <Navlist items={navItems} />
  </Wrapper>
);
