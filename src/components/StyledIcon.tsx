import styled from "styled-components";

interface PropTypes {
  margin?: string;
  fontSize?: string;
  color?: string | undefined;
}

export const StyledIcon = styled.span<PropTypes>`
  color: ${(props) => props.color || props.theme.color.accent};
  font-size: ${(props) => props.fontSize || "1rem"};
  margin: ${(props) => props.margin || "0"};
  display: inline-flex;
  justify-content: center;

  & > svg {
    width: ${(props) => props.fontSize || "1rem"};
    height: auto;
  }
`;
