import styled from "styled-components";

const Container = styled.div`
  width: 21.5rem;
  margin: 0 auto;

  @media (min-width: ${(props) =>
      props.theme.screenSize.md}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(12rem, 1fr));
    grid-column-gap: 1rem;
    padding: 0 1rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    padding: 0;
    width: fit-content;
    grid-template-columns: 460px 460px;
    grid-template-rows: 1fr min-content;
    grid-column-gap: 2rem;
  }
`;

export default Container;
