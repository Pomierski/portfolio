import styled, { css, useTheme } from "styled-components";
import { Theme } from "../../styles/theme";
import { StyledIcon } from "../StyledIcon";

interface PropTypes {
  margin?: string;
  fill?: boolean;
  center?: boolean;
  disable?: boolean;
  icon?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
  noBorder?: boolean;
  noHover?: boolean;
}

const Wrapper = styled.a<PropTypes>`
  font-family: ${(props) => props.theme.fontFamily.mono};
  border: 1px solid ${(props) => props.theme.color.accent};
  background: transparent;
  color: ${(props) => props.theme.color.accent};
  padding: 0.55rem 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin || "0"};
  transition: all 0.15s ease-out;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  width: fit-content;
  position: relative;
  cursor: ${(props) => (props.disable ? "not-allowed" : "pointer")};

  /* Bracket-style ::before/::after */
  &::before {
    content: "[";
    margin-right: 0.5rem;
    color: ${(props) => props.theme.color.accent};
    transition: transform 0.15s ease-out;
  }
  &::after {
    content: "]";
    margin-left: 0.5rem;
    color: ${(props) => props.theme.color.accent};
    transition: transform 0.15s ease-out;
  }

  &:hover {
    background-color: ${(props) => props.theme.color.accent};
    color: ${(props) => props.theme.color.bg};
    box-shadow: 4px 4px 0 0 ${(props) => props.theme.color.darkAccent};
    transform: translate(-2px, -2px);
  }

  &:hover::before {
    color: ${(props) => props.theme.color.bg};
    transform: translateX(-2px);
  }
  &:hover::after {
    color: ${(props) => props.theme.color.bg};
    transform: translateX(2px);
  }

  ${(props) =>
    props.noBorder &&
    css`
      border: 0;
      &::before,
      &::after {
        display: none;
      }
    `}

  ${(props) =>
    props.noHover &&
    css`
      &:hover {
        background-color: transparent;
        color: ${props.theme.color.accent};
        box-shadow: none;
        transform: none;
      }
      &:hover::before,
      &:hover::after {
        color: ${props.theme.color.accent};
        transform: none;
      }
    `}

  ${(props) =>
    props.fill &&
    css`
      background-color: ${props.theme.color.accent};
      color: ${props.theme.color.bg};
      border: 1px solid ${props.theme.color.accent};
      &::before,
      &::after {
        color: ${props.theme.color.bg};
      }
      &:hover {
        background-color: ${props.theme.color.darkAccent};
        border-color: ${props.theme.color.darkAccent};
        color: ${props.theme.color.bg};
      }
    `}

  ${(props) =>
    props.center &&
    css`
      margin: 0 auto;
    `}

  ${(props) =>
    props.disable &&
    css`
      border-color: ${props.theme.color.muted};
      color: ${props.theme.color.muted};
      &::before,
      &::after {
        color: ${props.theme.color.muted};
      }
      &:hover {
        transform: none;
        background-color: transparent;
        color: ${props.theme.color.muted};
        box-shadow: none;
      }
      &:hover::before,
      &:hover::after {
        color: ${props.theme.color.muted};
        transform: none;
      }
    `}
`;

export const Button = ({
  margin,
  fill,
  disable,
  center,
  children,
  icon,
  href,
  noBorder,
  noHover,
}: PropTypes) => {
  const theme = useTheme() as Theme;
  return (
    <Wrapper
      margin={margin}
      fill={fill}
      disable={disable}
      center={center}
      href={href}
      noBorder={noBorder}
      noHover={noHover}
    >
      {children}
      {icon ? (
        <StyledIcon
          data-testid="button-icon"
          color={
            disable
              ? theme.color.muted
              : fill
              ? theme.color.bg
              : theme.color.accent
          }
          margin="0 0 0 .5rem"
        >
          {icon}
        </StyledIcon>
      ) : null}
    </Wrapper>
  );
};
