import styled from "styled-components";

interface PropTypes {
  text: string;
}

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: ${(props) => props.theme.fontSize.lg};
  height: auto;
  font-size: ${(props) => props.theme.fontSize.lg};
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.color.accent};
  word-break: break-all;
  line-height: ${(props) => props.theme.fontSize.lg};
  user-select: none;

  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    font-size: ${(props) => props.theme.fontSize.xl};
    line-height: ${(props) => props.theme.fontSize.xl};
  }
`;

const VertialTextBanner = ({ text }: PropTypes) => (
  <Wrapper>
    {text.split("").map((letter, index) => (
      <div key={index}>{letter}</div>
    ))}
  </Wrapper>
);

export default VertialTextBanner;
