import styled from "styled-components";
import { Theme } from "../styles/theme";

interface PropTypes {
  color?: keyof Theme["color"];
}

const Heading = styled.h2<PropTypes>`
  color: ${(props) => props.color || props.theme.color.accent};
  fontsize: ${(props) => props.theme.fontSize.md};
  margin: 1rem 0;
  flex: 100%;
`;

export default Heading;
