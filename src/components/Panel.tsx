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
  justify-content: center;
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

  & > img {
    width: 24px;
    min-height: 24px;
  }

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    height: 100%;
    width: 100%;

    & > img {
      width: 36px;
      min-height: 51px;
      max-height: 51px;
    }
  }
`;

const Panel = ({ icon, title }: PropTypes) => (
  <Wrapper>
    <img src={icon} alt={title} width="36px" height="51px" />
    <p>{title}</p>
  </Wrapper>
);

export default Panel;
