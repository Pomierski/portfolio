import styled from "styled-components";
import { Theme } from "../../styles/theme";

interface PropTypes {
  color?: keyof Theme["color"];
}

export const Heading = styled.h2<PropTypes>`
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.color.accent};
  font-size: ${(props) => props.theme.fontSize.md};
  margin: 1rem 0;
  flex: 100%;
`;
