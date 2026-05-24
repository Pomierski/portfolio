import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

export const MainHeading = styled.h1`
  color: ${(props) => props.theme.color.main};
  font-family: ${(props) => props.theme.fontFamily.mono};
  font-weight: 700;
  letter-spacing: -0.04em;
  display: inline-block;
  text-transform: lowercase;
  margin-top: 0;
  font-size: 1.85rem;
  line-height: 1.05;
  margin-bottom: 0.75rem;
  word-break: break-word;

  &::before {
    content: "▸ ";
    color: ${(props) => props.theme.color.accent};
  }

  &::after {
    content: "_";
    margin-left: 0.25rem;
    color: ${(props) => props.theme.color.accent};
    animation: ${blink} 1.1s steps(1) infinite;
  }

  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    font-size: ${(props) => props.theme.fontSize.xl};
    line-height: 1;
  }
`;
