import styled from "styled-components";

interface PropTypes {
  margin?: string;
}

const FlexCenter = styled.div<PropTypes>`
  display: flex;
  align-items: center;
  margin: ${(props) => props.margin || "0"};
`;

export default FlexCenter;
