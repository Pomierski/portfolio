import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiTerminal } from "react-icons/fi";
import styled from "styled-components";
import { StyledIcon } from "../components/StyledIcon";

const Wrapper = styled.footer`
  font-family: ${(props) => props.theme.fontFamily.mono};
  width: 100%;
  margin: 4rem auto 1.5rem auto;
  padding-top: 1.5rem;
  border-top: 1px dashed ${(props) => props.theme.color.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    grid-column: 1 / 3;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 1rem 0 1rem;
    gap: 1rem;
  }
`;

const SignOff = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.color.secondary};
  font-size: 0.78rem;

  & span:first-child {
    color: ${(props) => props.theme.color.accent};
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Copy = styled.span`
  font-size: 0.7rem;
  color: ${(props) => props.theme.color.muted};
  letter-spacing: 0.05em;
`;

export const Footer = () => (
  <Wrapper>
    <SignOff>
      <span>
        <FiTerminal />
      </span>
      $ exit 0 — thanks for stopping by
    </SignOff>
    <IconsWrapper>
      <StyledIcon
        as="a"
        href="https://github.com/Pomierski"
        fontSize="1.25rem"
        aria-label="github profile"
      >
        <AiFillGithub />
      </StyledIcon>
      <StyledIcon
        as="a"
        fontSize="1.25rem"
        href="https://www.linkedin.com/in/piotr-pomierski-5078781b1/"
        aria-label="linkedin profile"
      >
        <AiFillLinkedin />
      </StyledIcon>
      <Copy>© {new Date().getFullYear()} pomierski.dev</Copy>
    </IconsWrapper>
  </Wrapper>
);
