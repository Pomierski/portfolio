import styled from "styled-components";

interface PropTypes {
  icon: string;
  title: string;
}

const Wrapper = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mono};
  height: 5rem;
  width: 100%;
  background: ${(props) => props.theme.color.panel};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.5rem;
  flex-direction: column;
  font-size: 0.7rem;
  border: 1px solid ${(props) => props.theme.color.border};
  transition: 0.15s ease-out;
  position: relative;

  /* Corner ASCII brackets */
  &::before,
  &::after {
    position: absolute;
    color: ${(props) => props.theme.color.muted};
    font-size: 0.65rem;
    line-height: 1;
    transition: color 0.15s ease-out;
  }
  &::before {
    content: "┌";
    top: 2px;
    left: 3px;
  }
  &::after {
    content: "┘";
    bottom: 2px;
    right: 3px;
  }

  &:hover {
    border-color: ${(props) => props.theme.color.accent};
    background: ${(props) => props.theme.color.darkBg};

    &::before,
    &::after {
      color: ${(props) => props.theme.color.accent};
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    height: 100%;
    width: 100%;
    min-height: 5.5rem;
    padding: 0.75rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 1.75rem;
  width: 1.75rem;
  margin-bottom: 0.4rem;

  & > img {
    min-height: 1.5rem;
    object-fit: scale-down;
    filter: grayscale(0.15);
  }

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    height: 2rem;
    width: 2rem;
    margin-bottom: 0.5rem;

    & > img {
      min-height: 2rem;
    }
  }
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fontFamily.mono};
  font-size: 0.7rem;
  color: ${(props) => props.theme.color.secondary};
  text-align: center;
  letter-spacing: 0.02em;

  ${Wrapper}:hover & {
    color: ${(props) => props.theme.color.main};
  }
`;

export const Panel = ({ icon, title }: PropTypes) => (
  <Wrapper>
    <IconWrapper>
      <img src={icon} alt={title} width="36px" height="36px" />
    </IconWrapper>
    <Title>{title}</Title>
  </Wrapper>
);
