import styled from "styled-components";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Panel from "../components/Panel";
import Section from "../components/Section";
import Text from "../components/Text";
import icons from "../components/Utility/Icons";

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

const StyledText = styled(Text)`
  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    min-height: 5rem;
  }
`;

const Skills = () => (
  <Section id="skills" gridRow="3" gridCol="1 / 3">
    <Heading>Umiejętności</Heading>
    <Container>
      <div>
        <StyledText color="secondary">
          Przy tych technologiach spędziłem najwięcej czasu i przy ich użyciu
          napisałem najwięcej linijek kodu. Pisząc kod czuję się pewnie i zawsze
          szukam najlepszych rozwiązań.
        </StyledText>
        <PanelWrapper>
          <Panel icon={icons.react} title="React" />
          <Panel icon={icons.ts} title="Typescript" />
          <Panel icon={icons.js} title="Javascript" />
          <Panel icon={icons.html5} title="HTML5" />
          <Panel icon={icons.css} title="CSS3" />
          <Panel icon={icons.sass} title="Sass" />
        </PanelWrapper>
      </div>
      <div>
        <StyledText color="secondary">
          Technologie których nadal się uczę. Potrafię wykorzystać je w
          projektach, jednak chciałbym spędzić przy nich więcej czasu aby nabrać
          doświadczenia i pewności.
        </StyledText>
        <PanelWrapper>
          <Panel icon={icons.angular} title="Angular" />
          <Panel icon={icons.gatsby} title="Gatsby" />
          <Panel icon={icons.webpack} title="Webpack" />
          <Panel icon={icons.nodejs} title="NodeJS" />
          <Panel icon={icons.redux} title="Redux" />
          <Panel icon={icons.mysql} title="MySQL" />
          <Panel icon={icons.mongodb} title="MongoDB" />
          <Panel icon={icons.graphql} title="GraphQL" />
          <Panel icon={icons.go} title="GO" />
        </PanelWrapper>
      </div>
    </Container>
  </Section>
);

export default Skills;
