import styled from "styled-components";

interface PropTypes {
  $display?: boolean;
}

export const MobileMenu = styled.div<PropTypes>`
  left: 0;
  position: fixed;
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${(props) => props.theme.color.accent};
  background: ${(props) => props.theme.color.darkBg};
  z-index: 999;
  display: flex;
  justify-content: center;
  transform-origin: top;
  transform: ${(props) =>
    props.$display ? "translateY(0%)" : "translateY(-100%)"};
  transition: transform 0.5s;
  top: 0;
`;
