import styled from "styled-components";

export const MainHeading = styled.h1`
  color: #fff;
  letter-spacing: 4px;
  display: inline-block;
  text-transform: uppercase;
  margin-top: 0;
  font-size: calc(${(props) => props.theme.fontSize.lg} + 1px);
  line-height: ${(props) => props.theme.fontSize.lg};
  margin-bottom: 0.5rem;

  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    font-size: ${(props) => props.theme.fontSize.xl};
    line-height: ${(props) => props.theme.fontSize.xl};
  }
`;
