import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub } from "react-icons/ai";
import { MdFindInPage } from "react-icons/md";
import styled from "styled-components";
import { Button } from "./Button/Button";

interface PropTypes {
  contentTranslation: string;
  previewImg: string;
  subTitleTranslation: string;
  title: string;
  icons: string[];
  repoUrl: string;
  liveUrl?: string;
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mono};
  background: ${(props) => props.theme.color.panel};
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: left;
  border: 1px solid ${(props) => props.theme.color.border};
  transition: all 0.2s ease-out;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${(props) => props.theme.color.accent};
    box-shadow: 6px 6px 0 0 ${(props) => props.theme.color.darkAccent};
    transform: translate(-3px, -3px);
  }

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    width: 95%;
  }
`;

const TerminalBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0.75rem;
  border-bottom: 1px solid ${(props) => props.theme.color.border};
  background: ${(props) => props.theme.color.darkBg};
  font-size: 0.7rem;
  color: ${(props) => props.theme.color.secondary};
`;

const TerminalDot = styled.span<{ $color: string }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 0.4rem;
  background: ${(props) => props.$color};
`;

const TerminalLabel = styled.span`
  font-family: ${(props) => props.theme.fontFamily.mono};
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.color.secondary};
`;

const Preview = styled.div<Pick<PropTypes, "previewImg">>`
  width: 100%;
  height: 11rem;
  background: url("${(props) => props.previewImg}");
  background-size: cover;
  background-position: top center;
  filter: grayscale(0.2) contrast(1.05);
  border-bottom: 1px solid ${(props) => props.theme.color.border};
`;

const Heading = styled.h3`
  font-family: ${(props) => props.theme.fontFamily.mono};
  margin: 0.5rem 0 0.25rem 0;
  color: ${(props) => props.theme.color.main};
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.02em;

  &::before {
    content: "$ ";
    color: ${(props) => props.theme.color.accent};
  }
`;

const SubTitle = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mono};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.color.accent};
  margin: 0;
`;

const IconsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 2rem;
  padding: 0 0.5rem;
  background-color: rgba(0, 0, 0, 0.92);
  border-left: 1px solid ${(props) => props.theme.color.border};
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: auto !important;
  height: 60%;
  margin-right: 0.35rem;
  filter: grayscale(0.15);

  &:last-child {
    margin-right: 0;
  }
`;

const ButtonsWrapper = styled.div`
  padding: 0.75rem 1.25rem 1.25rem 1.25rem;
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`;

const Content = styled.div`
  padding: 1rem 1.25rem 0.75rem 1.25rem;
  color: ${(props) => props.theme.color.main};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Body = styled.p`
  color: ${(props) => props.theme.color.secondary};
  font-size: 0.82rem;
  line-height: 1.55;
  margin: 0.5rem 0;
`;

export const Card = ({
  previewImg,
  subTitleTranslation,
  contentTranslation,
  title,
  icons,
  repoUrl,
  liveUrl,
}: PropTypes) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <TerminalBar>
        <span>
          <TerminalDot $color="#fc6d26" />
          <TerminalDot $color="#fca326" />
          <TerminalDot $color="#5cb85c" />
        </span>
        <TerminalLabel>{title.toLowerCase().replace(/\s+/g, "-")}.tsx</TerminalLabel>
      </TerminalBar>
      <Preview previewImg={previewImg}>
        <IconsWrapper>
          {icons
            ? icons.map((icon, key) => (
                <Icon src={icon} alt="" key={key} width="36px" height="51px" />
              ))
            : null}
        </IconsWrapper>
      </Preview>
      <Content>
        <header>
          <SubTitle>{t(subTitleTranslation)}</SubTitle>
          <Heading>{title}</Heading>
        </header>
        <Body>{t(contentTranslation)}</Body>
      </Content>
      <ButtonsWrapper>
        <Button href={repoUrl} icon={<AiFillGithub />}>
          github
        </Button>
        <Button
          href={liveUrl || "#"}
          disable={!liveUrl}
          icon={<MdFindInPage />}
        >
          live
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
