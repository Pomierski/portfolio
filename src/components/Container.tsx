import styled from "styled-components";

interface Props {
  margin?: string;
}

const Container = styled.div<Props>`
  width: 21.5rem;
  margin: ${(props) => props.margin || "0 auto"};

  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(12rem, 28.75rem));
    grid-column-gap: 1rem;
    padding: 0 1rem;
    grid-auto-flow: row;
  }

  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    padding: 0;
    width: fit-content;
    grid-template-columns: repeat(2, 28.75rem);
    grid-template-rows: 1fr min-content;
    grid-column-gap: 2rem;
  }
`;

export default Container;
