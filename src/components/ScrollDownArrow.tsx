import { BiChevronDown } from "react-icons/bi";
import styled, { keyframes } from "styled-components";

const upAndDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(5px);
  }
`;

const Wrapper = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: ${(props) => props.theme.color.accent};
  object-fit: fill;
  text-align: center;
  font-size: 3rem;
  animation: ${upAndDown} 1s ease-in-out infinite alternate;
  margin: 0 auto;
  width: fit-content;
  grid-column: 1 / 3;
`;

export const ScrollDownArrow = () => (
  <Wrapper>
    <BiChevronDown />
  </Wrapper>
);
