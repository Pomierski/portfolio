import React from "react";
import styled from "styled-components";
import Text from "./Text";

interface Position {
  title: string;
  description: string;
}

interface PropTypes {
  positions: Position[];
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2.5rem 1fr;
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
`;

const Point = styled.div`
  border-radius: 100%;
  background: ${(props) => props.theme.color.accent};
  width: 1.4rem;
  height: 1.4rem;
`;

const Line = styled.div`
  background: ${(props) => props.theme.color.darkAccentBg};
  height: 100%;
  width: 2px;
`;

const Title = styled(Text)`
  display: flex;
  align-items: center;
`;

const StyledText = styled(Text)`
  padding: 0.5rem 0;
  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    padding: 0;
  }
`;

const Timeline = ({ positions }: PropTypes) => {
  return (
    <Wrapper>
      {positions.map((el, index) => (
        <React.Fragment key={index}>
          <TimelineWrapper>
            <Point />
            <Line />
          </TimelineWrapper>
          <TextWrapper>
            <Title fontSize="sm">{el.title}</Title>
            <StyledText color="secondary">{el.description}</StyledText>
          </TextWrapper>
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default Timeline;
