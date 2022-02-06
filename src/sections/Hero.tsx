import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlinePaperClip,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import styled from "styled-components";
import AnimatedHeroImg from "../components/AnimatedHeroImg/AnimatedHeroImg";
import Button from "../components/Button";
import FlexCenter from "../components/FlexCenter";
import ScrollDownArrow from "../components/Hero/ScrollDownArrow";
import VertialTextBanner from "../components/Hero/VerticalTextBanner";
import MainHeading from "../components/MainHeading";
import StyledIcon from "../components/StyledIcon";
import Text from "../components/Text";

const ContentWrapper = styled.div`
  display: flex;
  padding-top: 2rem;
  width: fit-content;

  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    grid-column: 1;
    grid-row: 1;
  }
`;

const TextWrapper = styled.div`
  margin-left: 1rem;
  margin-top: 0.25px;
  width: 208px;
  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    width: 100%;
  }
`;

const StyledP = styled(Text)`
  margin: 0;
  @media (min-width: ${(props) =>
      props.theme.screenSize.md}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    font-size: 1.2rem;
  }
`;

const Info = styled.div`
  position: absolute;
  bottom: 1px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin: 2rem auto;
  justify-content: space-between;
  margin-bottom: 5rem;

  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    grid-row: 2;
    grid-column: 1;
    width: 100%;
    padding-right: 9rem;
  }
`;

const HeroImg = styled.div`
  display: none;

  @media (min-width: ${(props) =>
      props.theme.screenSize.md}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    display: flex;
    width: 80%;
    margin-left: 4rem;
  }
  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    margin: 0;
    justify-content: center;
    align-items: center;
    grid-row: 1 / 3;
    grid-column: 2;
    width: 100%;

    & > img {
      width: auto;
      height: 100%;
    }
  }
`;

const Wrapper = styled.div`
  align-items: center;
  grid-column: 1 / 3;
  width: 100%;
  display: grid;
  margin-top: -4.5rem;
  height: calc(${window.innerHeight}px);
  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    margin-top: 0;
    height: 100vh;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    padding: 0;
    width: fit-content;
    grid-template-columns: 460px 460px;
    grid-template-rows: 1fr min-content;
    grid-column-gap: 2rem;
    height: 100vh;
  }
  @media (max-height: ${(props) => props.theme.horizontalHeightLimit}) {
    margin-top: 4.5rem;
    height: 100%;
  }
`;

const Content = styled.div`
  grid-column: 1;
`;

const Hero = () => (
  <Wrapper>
    <Content>
      <ContentWrapper id="home">
        <VertialTextBanner text="FRONT/END" />
        <VertialTextBanner text="DEVELOPER" />
        <TextWrapper>
          <MainHeading>
            Piotr <br /> Pomierski
          </MainHeading>
          <StyledP>
            Cześć! 👋 Aspiruję do zostania <br />
            front-end developerem. Na co dzień posługuję się biblioteką React,
            ale Angular nie jest mi straszny. 😎 Uwielbiam tworzyć aplikacje
            internetowe oraz poznawać nowe technologie. Badam również świat
            backendu 🛠️ oraz projektowania UI/UX 👨‍🎨
          </StyledP>
          <Info>
            <FlexCenter margin=".5rem 0">
              <StyledIcon margin="0 .5rem 0 0">
                <FiMail />
              </StyledIcon>
              pomierskipiotr@gmail.com
            </FlexCenter>
            <FlexCenter>
              <StyledIcon margin="0 .5rem 0 0">
                <IoLocationSharp />
              </StyledIcon>
              Katowice, Polska
            </FlexCenter>
          </Info>
        </TextWrapper>
      </ContentWrapper>
      <ButtonsWrapper>
        <Button href="https://github.com/Pomierski" icon={<AiFillGithub />}>
          Github
        </Button>
        <Button
          href="https://www.linkedin.com/in/piotr-pomierski-5078781b1/"
          icon={<AiFillLinkedin />}
        >
          Linkedin
        </Button>
        <Button icon={<AiOutlinePaperClip />}>CV</Button>
      </ButtonsWrapper>
    </Content>
    <HeroImg>
      <AnimatedHeroImg />
    </HeroImg>
    <ScrollDownArrow />
  </Wrapper>
);

export default Hero;
