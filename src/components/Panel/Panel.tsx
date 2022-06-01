import React from "react";
import styled from "styled-components";

interface PropTypes {
  icon: string;
  title: string;
}

const Wrapper = styled.div`
  height: 5rem;
  width: 5rem;
  background: ${(props) => props.theme.color.darkBg};
  display: inline-flex;
  align-items: center;
  padding: 1rem;
  flex-direction: column;
  font-size: 0.8rem;
  box-shadow: 0 15px 24px -10px rgb(0 0 0 / 15%);
  border-left: 2px solid ${(props) => props.theme.color.darkBg};
  border-bottom: 2px solid ${(props) => props.theme.color.darkBg};
  transition: 0.5s;

  &:hover {
    transform: translate(2px, -2px);
    border-left: 2px solid ${(props) => props.theme.color.accent};
    border-bottom: 2px solid ${(props) => props.theme.color.accent};
  }

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    height: 100%;
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 1.5rem;
  width: 1.5rem;

  & > img {
    min-height: 1.5rem;
  }
  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    width: 2rem;
    min-height: 3rem;
    & > img {
      min-height: 3rem;
    }
  }
`;

const Panel = ({ icon, title }: PropTypes) => (
  <Wrapper>
    <IconWrapper>
      <img src={icon} alt={title} width="36px" height="51px" />
    </IconWrapper>
    <p>{title}</p>
  </Wrapper>
);

export default Panel;
