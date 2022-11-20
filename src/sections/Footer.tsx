import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styled from "styled-components";
import { StyledIcon } from "../components/StyledIcon";
import { Text } from "../components/Text/Text";

const Wrapper = styled.footer`
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    grid-column: 1 / 3;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Footer = () => (
  <Wrapper>
    <IconsWrapper>
      <StyledIcon
        as="a"
        href="https://github.com/Pomierski"
        fontSize="1.5rem"
        aria-label="github profile"
      >
        <AiFillGithub />
      </StyledIcon>
      <StyledIcon
        as="a"
        fontSize="1.5rem"
        href="https://www.linkedin.com/in/piotr-pomierski-5078781b1/"
        aria-label="linkedin profile"
      >
        <AiFillLinkedin />
      </StyledIcon>
    </IconsWrapper>
    <Text fontSize="xs">© {new Date().getFullYear()} Piotr Pomierski.</Text>
  </Wrapper>
);
