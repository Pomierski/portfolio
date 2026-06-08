import styled from "styled-components";
import { Theme } from "../../styles/theme";

interface PropTypes {
  color?: keyof Theme["color"];
  stage?: string;
  children?: React.ReactNode;
  className?: string;
}

const Wrapper = styled.div`
  margin: 1.5rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const Stage = styled.span`
  font-family: ${(props) => props.theme.fontFamily.mono};
  font-size: 0.72rem;
  color: ${(props) => props.theme.color.secondary};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  & > span {
    color: ${(props) => props.theme.color.accent};
  }
`;

const HeadingTag = styled.h2<{ $color?: keyof Theme["color"] }>`
  font-family: ${(props) => props.theme.fontFamily.mono};
  color: ${(props) =>
    props.$color ? props.theme.color[props.$color] : props.theme.color.main};
  font-size: ${(props) => props.theme.fontSize.md};
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-transform: lowercase;

  &::before {
    content: "▸ ";
    color: ${(props) => props.theme.color.accent};
  }
`;

const Underline = styled.span`
  font-family: ${(props) => props.theme.fontFamily.mono};
  color: ${(props) => props.theme.color.border};
  font-size: 0.7rem;
  line-height: 0.5;
  letter-spacing: 0;
  user-select: none;
  display: block;
  overflow: hidden;
  white-space: nowrap;
`;

export const Heading = ({ color, stage, children, className }: PropTypes) => (
  <Wrapper className={className}>
    {stage ? (
      <Stage>
        <span>{"// "}</span>
        {stage}
      </Stage>
    ) : null}
    <HeadingTag $color={color}>{children}</HeadingTag>
    <Underline aria-hidden="true">
      {"─".repeat(120)}
    </Underline>
  </Wrapper>
);
