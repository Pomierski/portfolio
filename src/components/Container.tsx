import styled from "styled-components";

interface Props {
  margin?: string;
}

export const Container = styled.div<Props>`
  width: 100%;
  max-width: 21.5rem;
  padding: 0 1rem;
  margin: ${(props) => props.margin || "0 auto"};
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    max-width: 1080px;
    display: grid;
    grid-template-columns: repeat(2, minmax(12rem, 1fr));
    grid-column-gap: 1.5rem;
    padding: 0 1.5rem;
    grid-auto-flow: row;
  }

  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    padding: 0 2rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr min-content;
    grid-column-gap: 2.5rem;
  }
`;
