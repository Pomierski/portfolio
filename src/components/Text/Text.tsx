import styled from "styled-components";
import { Theme } from "../../styles/theme";

interface PropTypes {
  color?: keyof Theme["color"];
  fontSize?: keyof Theme["fontSize"];
  padding?: string;
  margin?: string;
}

const Text = styled.p<PropTypes>`
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.color.main};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSize[props.fontSize]
      : props.theme.fontSize.default};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0.5rem 0"};
`;

export default Text;
