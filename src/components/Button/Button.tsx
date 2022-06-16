import styled, { css, useTheme } from "styled-components";
import { Theme } from "../../styles/theme";
import StyledIcon from "../StyledIcon";

interface PropTypes {
  margin?: string;
  fill?: boolean;
  center?: boolean;
  disable?: boolean;
  icon?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
}

const Wrapper = styled.a<Partial<PropTypes>>`
  border: 1px solid ${(props) => props.theme.color.accent};
  background: none;
  color: ${(props) => props.theme.color.accent};
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin || "0"};
  transition: 0.25s;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  width: fit-content;
  cursor: ${(props) => (props.disable ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${(props) => props.theme.color.darkBg};
    transform: scale(1.05);
  }

  ${(props) =>
    props.fill &&
    css`
      background-color: ${(props) => props.theme.color.accent};
      color: #000;
      border: 0;
      &:hover {
        background-color: ${(props) => props.theme.color.accent};
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
      border-color: ${(props) => props.theme.color.secondary};
      color: ${(props) => props.theme.color.secondary};
      &:hover {
        transform: none;
      }
    `}
`;

const Button = ({
  margin,
  fill,
  disable,
  center,
  children,
  icon,
  href,
}: PropTypes) => {
  const theme = useTheme() as Theme;
  return (
    <Wrapper
      margin={margin}
      fill={fill}
      disable={disable}
      center={center}
      href={href}
    >
      {children}
      {icon ? (
        <StyledIcon
          data-testId="button-icon"
          color={disable ? theme.color.secondary : theme.color.accent}
          margin="0 0 0 .25rem"
        >
          {icon}
        </StyledIcon>
      ) : null}
    </Wrapper>
  );
};

export default Button;
