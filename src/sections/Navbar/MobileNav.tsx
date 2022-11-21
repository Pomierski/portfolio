import React, { useEffect, useRef, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import { MobileMenu } from "../../components/MobileMenu";
import { Navlist } from "../../components/NavList";
import { StyledIcon } from "../../components/StyledIcon";
import { navItems } from "./shared/navItems";

interface PropTypes {
  outsideRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2rem;
  z-index: 2;
  justify-content: flex-end;
  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    display: none;
  }
`;

const AnimatedIcon = styled(CgMenuGridO)<{ $display?: boolean }>`
  transform: ${(props) =>
    props.$display ? "rotate(90deg) scale(0)" : "rotate(0deg) scale(1)"};
  transition: transform 0.25s;
`;

export const MobileNav = ({ outsideRef }: PropTypes) => {
  const [display, setDisplay] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setDisplay(!display);
  };

  const hideMenu = (e: MouseEvent) => {
    if (e.target !== menuRef.current) setDisplay(false);
  };

  useEffect(() => {
    outsideRef?.current?.addEventListener("click", hideMenu);
  }, [outsideRef]);

  return (
    <Wrapper>
      <MobileMenu $display={display} ref={menuRef}>
        <Navlist items={navItems} />
      </MobileMenu>
      <Button noBorder noHover>
        <StyledIcon
          margin="0 -3px 0 auto"
          fontSize="2.5rem"
          onClick={toggleMenu}
        >
          <AnimatedIcon $display={display} />
        </StyledIcon>
      </Button>
    </Wrapper>
  );
};
