import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { icons } from "../../assets/icons";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading/Heading";
import { Panel } from "../../components/Panel/Panel";
import { Section } from "../../components/Section";
import { Text } from "../../components/Text/Text";
import { SectionIds } from "../sectionIds";

const PanelWrapper = styled.div`
  padding: 1rem 0 1rem 0;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: auto;
  grid-gap: 0.25rem;
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.5rem;
  }
`;

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <Section id={SectionIds.skills} gridCol="1 / 3">
      <Heading>{t("skills.heading")}</Heading>
      <Container margin="0 auto 2rem auto">
        <div>{t("skills.description")}</div>
      </Container>
      <Container>
        <div>
          <Text color="secondary">{t("skills.specialization")}</Text>
          <PanelWrapper>
            <Panel icon={icons.react} title="React" />
            <Panel icon={icons.ts} title="Typescript" />
            <Panel icon={icons.js} title="Javascript" />
            <Panel icon={icons.jest} title="Jest" />
            <Panel icon={icons.rtl} title="RTL" />
            <Panel icon={icons.html5} title="HTML5" />
            <Panel icon={icons.css} title="CSS3" />
            <Panel icon={icons.sass} title="Sass" />
            <Panel icon={icons.git} title="Git" />
          </PanelWrapper>
        </div>
        <div>
          <Text color="secondary">{t("skills.additional")}</Text>
          <PanelWrapper>
            <Panel icon={icons.angular} title="Angular" />
            <Panel icon={icons.gatsby} title="Gatsby" />
            <Panel icon={icons.webpack} title="Webpack" />
            <Panel icon={icons.nodejs} title="NodeJS" />
            <Panel icon={icons.redux} title="Redux" />
            <Panel icon={icons.docker} title="Docker" />
            <Panel icon={icons.mongodb} title="MongoDB" />
            <Panel icon={icons.graphql} title="GraphQL" />
            <Panel icon={icons.go} title="GO" />
            <Panel icon={icons.mysql} title="MySQL" />
            <Panel icon={icons.babel} title="Babel" />
          </PanelWrapper>
        </div>
      </Container>
    </Section>
  );
};
