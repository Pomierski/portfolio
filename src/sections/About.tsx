import React from "react";
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
          Mam 21 lat. Interesuję się programowaniem od {currentYear - 2016} lat.
          Od początku 2021 próbuję swoich sił w świecie komercyjnym.
          Specjalizuje się we frontendzie, gdyż tworzenie świetnie wygladających
          stron sprawia mi najwięcej satysfakcji. Lubię również pogłębiać wiedzę
          ze świata backendu, ponieważ pozwala mi to na rozszerzanie
          funkcjonalości moich projektów :)
        </Text>
      </div>
      <div>
        <Heading>Doświadczenie</Heading>
        <Timeline
          positions={[
            {
              title: "Junior frontend developer (Angular)",
              description: "wrz 2021 - gru 2021 · 4 mieś.",
            },
            {
              title: "Staż Junior frontend developer (Angular)",
              description: "sie 2021 - wrz 2021 · 1 mieś.",
            },
          ]}
        />
      </div>
    </Container>
  </Section>
);

export default About;
