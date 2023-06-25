import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { icons } from "../../assets/icons";
import { projectImage } from "../../assets/projectImage";
import { Card } from "../../components/Card";
import { Heading } from "../../components/Heading/Heading";
import { Section } from "../../components/Section";
import { SectionIds } from "../sectionIds";

const cards = [
  {
    title: "Changlelog.md helper",
    subTitleTranslation: "projects.changelog_md.subTitle",
    previewImg: projectImage.changelogMd,
    icons: [icons.ts, icons.jest],
    contentTranslation: "projects.changelog_md.content",
    repoUrl: "https://github.com/Pomierski/changelog-md-helper",
    liveUrl: "https://www.npmjs.com/package/changelog-md-helper",
  },
  {
    title: "SuggestMeAnime",
    subTitleTranslation: "projects.suggestMeAnime.subTitle",
    previewImg: projectImage.suggestMeAnime,
    icons: [icons.react, icons.redux, icons.ts],
    contentTranslation: "projects.suggestMeAnime.content",
    repoUrl: "https://github.com/Pomierski/SuggestMeAnime",
    liveUrl: "https://pomierski.github.io/SuggestMeAnime",
  },
  {
    title: "Silver",
    subTitleTranslation: "projects.silver.subTitle",
    previewImg: projectImage.silver,
    icons: [icons.adobeXD, icons.sass, icons.html5],
    contentTranslation: "projects.silver.content",
    repoUrl: "https://github.com/Pomierski/website-template",
    liveUrl: "https://pomierski.github.io/website-template",
  },
  {
    title: "Organize",
    subTitleTranslation: "projects.organize.subTitle",
    previewImg: projectImage.organize,
    icons: [icons.nodejs, icons.ts],
    contentTranslation: "projects.organize.content",
    repoUrl: "https://github.com/Pomierski/organize",
    liveUrl: "https://github.com/Pomierski/organize",
  },
  {
    title: "Marbond.pl",
    subTitleTranslation: "projects.marbond.subTitle",
    previewImg: projectImage.marbond,
    icons: [icons.adobeXD, icons.react],
    contentTranslation: "projects.marbond.content",
    repoUrl: "https://github.com/Pomierski/Marbond",
    liveUrl: "https://marbond.pl/",
  },
  {
    title: "Pomierski.pl",
    subTitleTranslation: "projects.pomierski.subTitle",
    previewImg: projectImage.pomierskiBlog,
    icons: [icons.gatsby, icons.graphql],
    contentTranslation: "projects.pomierski.content",
    repoUrl: "https://github.com/Pomierski/marcin-pomierski-wiersze",
    liveUrl: "http://www.pomierski.pl/",
  },
  {
    title: "MyAnimeReminder",
    subTitleTranslation: "projects.myAnimeReminder.subTitle",
    previewImg: projectImage.myAnimeReminder,
    icons: [icons.react, icons.ts],
    contentTranslation: "projects.myAnimeReminder.content",
    repoUrl: "https://github.com/Pomierski/MyAnimeReminder",
    liveUrl:
      "https://chrome.google.com/webstore/detail/myanimereminder/ncdghgolehhmfedjdbicgdbedefglbfk",
  },
  {
    title: "YayNay",
    subTitleTranslation: "projects.yayNay.subTitle",
    previewImg: projectImage.yayNay,
    icons: [icons.mysql, icons.react, icons.ts, icons.nodejs],
    contentTranslation: "projects.yayNay.content",
    repoUrl: "https://github.com/Pomierski/yaynay",
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
            subTitleTranslation,
            previewImg,
            icons,
            contentTranslation,
            repoUrl,
            liveUrl,
          }) => (
            <Card
              title={title}
              subTitleTranslation={subTitleTranslation}
              previewImg={previewImg}
              icons={icons}
              key={title}
              repoUrl={repoUrl}
              liveUrl={liveUrl}
              contentTranslation={contentTranslation}
            />
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
            previewImg,
            icons,
            contentTranslation,
            repoUrl = "https://github.com/Pomierski?tab=repositories",
            liveUrl = "https://github.com/Pomierski?tab=repositories",
            subTitleTranslation,
          }) => (
            <Card
              title={title}
              subTitleTranslation={subTitleTranslation}
              contentTranslation={contentTranslation}
              previewImg={previewImg}
              icons={icons}
              key={title}
              repoUrl={repoUrl}
              liveUrl={liveUrl}
            />
          )
        )}
      </StyledCarousel>
    </Section>
  );
};
