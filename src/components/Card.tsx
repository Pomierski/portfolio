import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdFindInPage } from "react-icons/md";
import styled from "styled-components";
import Button from "./Button";

interface PropTypes {
  previewImg: string;
  subTitle: string;
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
  box-shadow: 0 15px 24px -10px rgb(0 0 0 / 15%);
  text-align: left;
  border: 1px solid ${(props) => props.theme.color.darkBg};
  //transition: transform 0.5s;
  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    width: 90%;
  }

  &:hover {
    //border: 1px solid ${(props) => props.theme.color.accent};
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

const SubTitle = styled.p`
  margin: 0;
  color: ${(props) => props.theme.color.accent};
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.8rem;
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

const Card = ({
  previewImg,
  subTitle,
  title,
  icons,
  repoUrl,
  liveUrl,
  children,
}: PropTypes) => (
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
        <SubTitle>{subTitle}</SubTitle>
        <Heading>{title}</Heading>
      </header>
      <p>{children}</p>
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

export default Card;
