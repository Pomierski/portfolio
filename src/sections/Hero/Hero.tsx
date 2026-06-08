import { useTranslation } from "react-i18next";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlinePaperClip,
} from "react-icons/ai";
import { FiMail, FiTerminal } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import styled from "styled-components";
import { AsciiPipeline } from "../../components/AsciiPipeline/AsciiPipeline";
import { Button } from "../../components/Button/Button";
import { FlexCenter } from "../../components/FlexCenter";
import { MainHeading } from "../../components/MainHeading";
import { ScrollDownArrow } from "../../components/ScrollDownArrow";
import { StyledIcon } from "../../components/StyledIcon";
import { Text } from "../../components/Text/Text";
import { VertialTextBanner } from "../../components/VerticalTextBanner";

const ContentWrapper = styled.div`
  display: flex;
  padding-top: 1.5rem;
  width: 100%;
  align-items: flex-start;

  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    grid-column: 1;
    grid-row: 1;
    width: fit-content;
  }
`;

const StatusBar = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mono};
  font-size: 0.7rem;
  color: ${(props) => props.theme.color.secondary};
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed ${(props) => props.theme.color.border};

  & > span:first-child {
    color: ${(props) => props.theme.color.accent};
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

const StatusDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  background: ${(props) => props.theme.color.success};
  margin-right: 0.4rem;
  animation: pulse 1.6s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
`;

const TextWrapper = styled.div`
  margin-left: 0.5rem;
  flex: 1;
  min-width: 0;

  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    width: 100%;
    max-width: 32rem;
  }
`;

const StyledP = styled(Text)`
  margin: 0.5rem 0 1rem 0;
  font-family: ${(props) => props.theme.fontFamily.mono};
  font-size: 0.85rem;
  line-height: 1.55;
  color: ${(props) => props.theme.color.secondary};
  max-width: 32rem;

  @media (min-width: ${(props) =>
      props.theme.screenSize.md}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    font-size: 1rem;
  }
`;

const Tagline = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mono};
  font-size: 0.78rem;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0.02em;
  margin-bottom: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border-left: 2px solid ${(props) => props.theme.color.accent};
  padding-left: 0.6rem;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    font-size: 0.95rem;
  }
`;

const Info = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mono};
  font-size: 0.74rem;
  color: ${(props) => props.theme.color.secondary};
  margin-top: 0.5rem;
  word-break: break-all;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.5rem 0 4rem 0;
  gap: 0.5rem;

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    width: 100%;
    grid-row: 2;
    grid-column: 1;
    justify-content: flex-start;
    margin: 1.5rem 0 4rem 0;
  }
`;

const HeroImg = styled.div`
  display: none;

  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    grid-row: 1 / 3;
    grid-column: 2;
  }
`;

const Wrapper = styled.div`
  align-items: flex-start;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  min-height: calc(100vh - ${(props) => props.theme.navbarHeight} - 2rem);
  padding-bottom: 5rem;
  position: relative;

  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    min-height: calc(100vh - ${(props) => props.theme.navbarHeight});
    padding-bottom: 4rem;
  }
  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    padding: 0 0 4rem 0;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: 1fr min-content;
    grid-column-gap: 2rem;
  }
  @media (max-height: ${(props) => props.theme.horizontalHeightLimit}) {
    margin-top: 4.5rem;
    height: 100%;
  }
`;

const Content = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    grid-column: 1;
  }
`;

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Content>
        <ContentWrapper id="home">
          <VertialTextBanner text="FRONTEND" />
          <VertialTextBanner text="INFRA/DX" />
          <TextWrapper>
            <StatusBar>
              <span>
                <StatusDot />
                online
              </span>
              <span>· katowice/pl</span>
              <span>· 2026.05</span>
            </StatusBar>
            <Tagline>
              <FiTerminal />
              piotr.pomierski@shiji
            </Tagline>
            <MainHeading>
              piotr<br />pomierski
            </MainHeading>
            <StyledP>{t("hero.bio")}</StyledP>
            <Info>
              <FlexCenter margin=".25rem 0">
                <StyledIcon margin="0 .5rem 0 0">
                  <FiMail />
                </StyledIcon>
                pomierskipiotr@gmail.com
              </FlexCenter>
              <FlexCenter>
                <StyledIcon margin="0 .5rem 0 0">
                  <IoLocationSharp />
                </StyledIcon>
                Katowice, {t("hero.poland")}
              </FlexCenter>
            </Info>
          </TextWrapper>
        </ContentWrapper>
        <ButtonsWrapper>
          <Button href="https://github.com/Pomierski" icon={<AiFillGithub />}>
            github
          </Button>
          <Button
            href="https://www.linkedin.com/in/piotr-pomierski-5078781b1/"
            icon={<AiFillLinkedin />}
          >
            linkedin
          </Button>
          <Button
            href="https://dev.to/piotr_pomierski"
            icon={<AiOutlinePaperClip />}
          >
            blog
          </Button>
        </ButtonsWrapper>
      </Content>
      <HeroImg>
        <AsciiPipeline />
      </HeroImg>
      <ScrollDownArrow />
    </Wrapper>
  );
};
