import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { Card } from "../../components/Card";
import { Heading } from "../../components/Heading/Heading";
import { Section } from "../../components/Section";
import i18n from "../../i18n";
import { icons } from "../../utility/icons";
import { projectImage } from "../../utility/projectImage";
import { SectionIds } from "../sectionIds";

const cards = [
  {
    title: "Marbond.pl",
    subTitle: i18n.t("projects.marbond.subTitle"),
    previewImg: projectImage.marbond,
    icons: [icons.adobeXD, icons.react],
    content: i18n.t("projects.marbond.content"),
    repoUrl: "https://github.com/Pomierski/Marbond",
    liveUrl: "https://marbond.pl/",
  },
  {
    title: "MyAnimeReminder",
    subTitle: i18n.t("projects.myAnimeReminder.subTitle"),
    previewImg: projectImage.myAnimeReminder,
    icons: [icons.react],
    content: i18n.t("projects.myAnimeReminder.content"),
    repoUrl: "https://github.com/Pomierski/MyAnimeReminder",
    liveUrl:
      "https://chrome.google.com/webstore/detail/myanimereminder/ncdghgolehhmfedjdbicgdbedefglbfk",
  },
  {
    title: "YayNay",
    subTitle: i18n.t("projects.yayNay.subTitle"),
    previewImg: projectImage.yayNay,
    icons: [icons.mysql, icons.react, icons.ts, icons.nodejs],
    content: i18n.t("projects.yayNay.content"),
    repoUrl: "https://github.com/Pomierski/yaynay",
  },
  {
    title: "Silver",
    subTitle: i18n.t("projects.silver.subTitle"),
    previewImg: projectImage.silver,
    icons: [icons.adobeXD, icons.sass, icons.html5],
    content: i18n.t("projects.silver.content"),
    repoUrl: "https://github.com/Pomierski/website-template",
    liveUrl: "https://pomierski.github.io/website-template",
  },
  {
    title: "Organize",
    subTitle: i18n.t("projects.organize.subTitle"),
    previewImg: projectImage.organize,
    icons: [icons.nodejs],
    content: i18n.t("projects.organize.content"),
    repoUrl: "https://github.com/Pomierski/organize",
    liveUrl: "https://github.com/Pomierski/organize",
  },
  {
    title: "SuggestMeAnime",
    subTitle: i18n.t("projects.suggestMeAnime.subTitle"),
    previewImg: projectImage.suggestMeAnime,
    icons: [icons.react, icons.redux],
    content: i18n.t("projects.suggestMeAnime.content"),
    repoUrl: "https://github.com/Pomierski/SuggestMeAnime",
    liveUrl: "https://pomierski.github.io/SuggestMeAnime",
  },
  {
    title: "Pomierski.pl",
    subTitle: i18n.t("projects.pomierski.subTitle"),
    previewImg: projectImage.pomierskiBlog,
    icons: [icons.gatsby, icons.graphql],
    content: i18n.t("projects.pomierski.content"),
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

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <Section id={SectionIds.projects} gridCol="1 / 3">
      <Heading>{t("projects.heading")}</Heading>
      <CardsWrapper>
        {cards.map(
          ({
            title,
            subTitle,
            previewImg,
            icons,
            content,
            repoUrl,
            liveUrl,
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
};
