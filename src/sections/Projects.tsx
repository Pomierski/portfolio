import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import Card from "../components/Card";
import Heading from "../components/Heading/Heading";
import Section from "../components/Section";
import icons from "../components/Utility/Icons";
import projectImage from "../components/Utility/ProjectImage";

const cards = [
  {
    title: "Marbond.pl",
    subTitle: "Strona wizytówka",
    previewImg: projectImage.marbond,
    icons: [icons.adobeXD, icons.react],
    content: `Strona wizytkówka zaprojektowana i napisana dla firmy Marbond.`,
    repoUrl: "https://github.com/Pomierski/Marbond",
    liveUrl: "https://marbond.pl/",
  },
  {
    title: "MyAnimeReminder",
    subTitle: "Chrome Extension",
    previewImg: projectImage.myAnimeReminder,
    icons: [icons.react],
    content: `Rozszerzenie do przeglądarek opartych na Chromium. Przy wykorzystaniu JikanAPI i 
    SyncStorage przypomina o premierach odcinków anime.`,
    repoUrl: "https://github.com/Pomierski/MyAnimeReminder",
    liveUrl:
      "https://chrome.google.com/webstore/detail/myanimereminder/ncdghgolehhmfedjdbicgdbedefglbfk",
  },
  {
    title: "YayNay",
    subTitle: "Projekt fullstack",
    previewImg: projectImage.yayNay,
    icons: [icons.mysql, icons.react, icons.ts, icons.nodejs],
    content: `Projekt fullstack. Strona do tworzenia ankiet z dwoma opcjami - yay lub nay. 
    Technologie wykorzystane do Back-endu (REST Api) to NodeJS z TypeScript oraz MySQL. Front-end napisany w React.`,
    repoUrl: "https://github.com/Pomierski/yaynay",
  },
  {
    title: "Silver",
    subTitle: "Strona wizytówka",
    previewImg: projectImage.silver,
    icons: [icons.adobeXD, icons.sass, icons.html5],
    content: `Szablon strony WWW. Stworzony przy użyciu własnego projektu. Napisany w HTMLu z użyciem SCSS. 
    Jako bundler został wykorzystany Parcel.`,
    repoUrl: "https://github.com/Pomierski/website-template",
    liveUrl: "https://pomierski.github.io/website-template",
  },
  {
    title: "Organize",
    subTitle: "NodeJS CLI",
    previewImg: projectImage.organize,
    icons: [icons.nodejs],
    content: `Organize to NodeJS CLI, służące do organizowania plików w osobne foldery. 
    Posiada różne opcje m.in. ignorowanie plików, przeniesienie tylko wybranego rodzaju plików`,
    repoUrl: "https://github.com/Pomierski/organize",
    liveUrl: "https://github.com/Pomierski/organize",
  },
  {
    title: "SuggestMeAnime",
    subTitle: "React app",
    previewImg: projectImage.suggestMeAnime,
    icons: [icons.react, icons.redux],
    content: `SuggestMeAnime to graficzny interfejs dla JikanAPI, pozwalający wyszukiwać pozycję dostepne w API. 
    Napisane przy użyciu React & Redux`,
    repoUrl: "https://github.com/Pomierski/SuggestMeAnime",
    liveUrl: "https://pomierski.github.io/SuggestMeAnime",
  },
  {
    title: "Pomierski.pl",
    subTitle: "Gatsby blog",
    previewImg: projectImage.pomierskiBlog,
    icons: [icons.gatsby, icons.graphql],
    content: `Blog napisany przy użyciu Gatsby.js oraz Headless CMS (GraphCMS).`,
    repoUrl: "https://github.com/Pomierski/marcin-pomierski-wiersze",
    liveUrl: "http://www.pomierski.pl/",
  },
];

const CardsWrapper = styled.div`
  display: none;
  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 3rem;
  }
`;

const StyledCarousel = styled(Carousel)`
  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    display: none;
  }
`;

const Projects = () => (
  <Section id="projects" gridCol="1 / 3">
    <Heading>Projekty</Heading>
    <CardsWrapper>
      {cards.map(
        ({ title, subTitle, previewImg, icons, content, repoUrl, liveUrl }) => (
          <Card
            title={title}
            subTitle={subTitle}
            previewImg={previewImg}
            icons={icons}
            key={title}
            repoUrl={repoUrl}
            liveUrl={liveUrl}
          >
            {content}
          </Card>
        )
      )}
    </CardsWrapper>
    <StyledCarousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      swipeable={true}
      showThumbs={false}
      showArrows={false}
      interval={4000}
    >
      {cards.map(
        ({
          title,
          subTitle,
          previewImg,
          icons,
          content,
          repoUrl = "https://github.com/Pomierski?tab=repositories",
          liveUrl = "https://github.com/Pomierski?tab=repositories",
        }) => (
          <Card
            title={title}
            subTitle={subTitle}
            previewImg={previewImg}
            icons={icons}
            key={title}
            repoUrl={repoUrl}
            liveUrl={liveUrl}
          >
            {content}
          </Card>
        )
      )}
    </StyledCarousel>
  </Section>
);

export default Projects;
