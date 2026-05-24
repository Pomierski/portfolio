import styled from "styled-components";

interface PropTypes {
  text: string;
}

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 1.5rem;
  flex-shrink: 0;
  height: auto;
  font-family: ${(props) => props.theme.fontFamily.mono};
  font-size: 1.4rem;
  font-weight: 700;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.color.muted};
  word-break: break-all;
  line-height: 1.1;
  letter-spacing: -0.04em;
  user-select: none;
  margin-right: 0.25rem;

  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    font-size: 2.4rem;
    width: 2.5rem;
    line-height: 1.05;
    margin-right: 0.5rem;
  }
`;

export const VertialTextBanner = ({ text }: PropTypes) => (
  <Wrapper aria-hidden="true">
    {text.split("").map((letter, index) => (
      <div key={index}>{letter}</div>
    ))}
  </Wrapper>
);
