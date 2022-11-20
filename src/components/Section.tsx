import styled from "styled-components";

interface PropTypes {
  gridCol: string;
  gridRow?: string;
}

export const Section = styled.section<PropTypes>`
  margin: ${(props) => props.theme.sectionGap} 0;

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    grid-column: ${(props) => props.gridCol};
    grid-row: ${(props) => props.gridRow || "unset"};
  }
`;
