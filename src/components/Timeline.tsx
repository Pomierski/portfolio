import React from "react";
import styled from "styled-components";
import { Text } from "./Text/Text";

interface Position {
  title: string;
  description: string;
  company: string;
}

interface PropTypes {
  positions: Position[];
}

const Wrapper = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mono};
  display: grid;
  grid-template-columns: 1.75rem 1fr;
  grid-auto-rows: 1fr;
  grid-auto-flow: row;
  grid-column-gap: 1rem;
`;

const TimelineWrapper = styled.div`
  display: grid;
  grid-template-rows: 2.5rem 1fr;
  grid-column: 1;
  place-items: center;
`;

const TextWrapper = styled.div`
  display: grid;
  grid-template-rows: 2.5rem 1fr;
  grid-column: 2;
  padding-bottom: 1rem;
`;

const Point = styled.div`
  background: ${(props) => props.theme.color.accent};
  width: 0.7rem;
  height: 0.7rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -3px;
    border: 1px solid ${(props) => props.theme.color.accent};
    opacity: 0.3;
  }
`;

const Line = styled.div`
  background: ${(props) => props.theme.color.border};
  height: 100%;
  width: 1px;
`;

const Title = styled(Text)`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${(props) => props.theme.color.main};
  font-size: 0.95rem;

  &::before {
    content: "▸ ";
    color: ${(props) => props.theme.color.accent};
    margin-right: 0.25rem;
  }
`;

const Company = styled(Text)`
  font-family: ${(props) => props.theme.fontFamily.mono};
  color: ${(props) => props.theme.color.accent};
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  padding: 0.2rem 0;
`;

const StyledText = styled(Text)`
  padding: 0.2rem 0 0.5rem 0;
  font-size: 0.78rem;
  color: ${(props) => props.theme.color.secondary};
`;

export const Timeline = ({ positions }: PropTypes) => {
  return (
    <Wrapper>
      {positions.map(({ title, company, description }, index) => (
        <React.Fragment key={index}>
          <TimelineWrapper>
            <Point />
            <Line />
          </TimelineWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            <div>
              <Company margin="0">{company}</Company>
              <StyledText margin="0">{description}</StyledText>
            </div>
          </TextWrapper>
        </React.Fragment>
      ))}
    </Wrapper>
  );
};
