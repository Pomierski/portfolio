import styled, { keyframes } from "styled-components";

const bob = keyframes`
  0%, 100% { transform: translateY(0); opacity: 0.7; }
  50%      { transform: translateY(6px); opacity: 1; }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  position: absolute;
  bottom: 1.25rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: fit-content;
  font-family: ${(props) => props.theme.fontFamily.mono};
  color: #ffffff;
  text-align: center;
  user-select: none;
  grid-column: 1 / 3;
  z-index: 3;
  pointer-events: none;
`;

const Label = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
`;

const Chevron = styled.span`
  font-size: 1.2rem;
  line-height: 1;
  color: #ffffff;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
  animation: ${bob} 1.4s ease-in-out infinite;
  font-weight: 700;
`;

export const ScrollDownArrow = () => (
  <Wrapper aria-hidden="true">
    <Label>scroll</Label>
    <Chevron>v</Chevron>
  </Wrapper>
);
