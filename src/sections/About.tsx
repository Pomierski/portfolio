import Container from "../components/Container";
import Heading from "../components/Heading/Heading";
import Section from "../components/Section";
import Text from "../components/Text/Text";
import Timeline from "../components/Timeline";

const currentYear = new Date().getFullYear();

const About = () => (
  <Section id="about" gridCol="1 / 3">
    <Container>
      <div>
        <Heading>O mnie</Heading>
        <Text>
          Interesuje się programowaniem od {currentYear - 2016} lat.
          Specjalizuje się we frontendzie. Głównie w tworzeniu logiki oraz
          stylowaniu UI. Tworzenie świetnie wygladających stron i aplikacji
          sprawia mi najwięcej satysfakcji. Zawsze dążę do pisania coraz
          lepszego kodu i poznawania nowych technologii. Lubię również pogłębiać
          wiedzę ze świata backendu, ponieważ pozwala mi to na rozszerzanie
          funkcjonalości moich projektów.
        </Text>
      </div>
      <div>
        <Heading>Doświadczenie</Heading>
        <Timeline
          positions={[
            {
              title: "Junior frontend developer (React)",
              description: "kwi 2022 - obecnie",
              company: "Shiji Poland",
            },
            {
              title: "Junior frontend developer (Angular)",
              description: "wrz 2021 - gru 2021 · 4 mies.",
              company: "Tom&Co",
            },
            {
              title: "Staż Junior frontend developer (Angular)",
              description: "sie 2021 - wrz 2021 · 1 mies.",
              company: "Tom&Co",
            },
          ]}
        />
      </div>
    </Container>
  </Section>
);

export default About;
