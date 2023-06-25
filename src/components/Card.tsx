import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub } from "react-icons/ai";
import { MdFindInPage } from "react-icons/md";
import styled from "styled-components";
import { Button } from "./Button/Button";
import { Text } from "./Text/Text";

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
  background: ${(props) => props.theme.color.darkBg};
  width: 100%;
  height: auto;
  margin: 0 auto;
  box-shadow: ${(props) => props.theme.boxShadow.default};
  text-align: left;
  border: 1px solid ${(props) => props.theme.color.darkBg};
  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    width: 90%;
  }
`;

const Preview = styled.div<Pick<PropTypes, "previewImg">>`
  width: 100%;
  height: 12rem;
  background: url("${(props) => props.previewImg}");
  background-size: cover;
`;

const Heading = styled.h3`
  margin: 0.5rem 0;
  color: #fff;
`;

const SubTitle = styled(Text)`
  text-transform: uppercase;
`;

const IconsWrapper = styled.div`
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  width: auto;
  height: 2rem;
  padding-left: 0.25rem;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: auto !important;
  height: 70%;
  margin-right: 0.25rem;
`;

const ButtonsWrapper = styled.div`
  padding-top: 0.5rem;
  display: flex;
  position: absolute;
  bottom: 1rem;
  left: 2rem;
`;

const Content = styled.div`
  padding: 1rem 2rem;
  min-height: 16rem;
  color: ${(props) => props.theme.color.secondary};
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
          <SubTitle color="accent" margin="0" fontSize="xs">
            {t(subTitleTranslation)}
          </SubTitle>
          <Heading>{title}</Heading>
        </header>
        <p>{t(contentTranslation)}</p>
        <ButtonsWrapper>
          <Button href={repoUrl} margin="0 .5rem 0 0" icon={<AiFillGithub />}>
            Github
          </Button>
          <Button
            href={liveUrl || "#"}
            disable={!liveUrl}
            icon={<MdFindInPage />}
          >
            Live
          </Button>
        </ButtonsWrapper>
      </Content>
    </Wrapper>
  );
};
