import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { Contribution } from "../../components/Contribution";
import { Heading } from "../../components/Heading/Heading";
import { Section } from "../../components/Section";
import { Text } from "../../components/Text/Text";

const contirbutionsData = [
  {
    repoName: "stable-diffusion-webui",
    repoAuthor: "AUTOMATIC1111",
    repoUrl: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    stars: 84000,
  },
  {
    repoName: "grafana",
    repoAuthor: "grafana",
    repoUrl: "https://github.com/grafana/grafana",
    stars: 55800,
  },
  {
    repoName: "DOMPurify",
    repoAuthor: "cure53",
    repoUrl: "https://github.com/cure53/DOMPurify",
    stars: 11200,
  },
  {
    repoName: "DreamBerd",
    repoAuthor: "TodePond",
    repoUrl: "https://github.com/TodePond/DreamBerd",
    stars: 2200,
  },
];

const Wrapper = styled.div`
  max-width: 100%;
  display: grid;
  padding-top: 1.5rem;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
  overflow-x: scroll;
  padding-bottom: 1.5rem;

  &::-webkit-scrollbar {
    height: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
  }
`;

export const Contributions = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" gridCol="1 / 3">
      <Container>
        <div style={{ gridColumn: "1 / 3" }}>
          <Heading>{t("contributions.header")}</Heading>
          <Text>{t("contributions.description")}</Text>
          <Wrapper>
            {contirbutionsData.map((contibution) => (
              <Contribution {...contibution} />
            ))}
          </Wrapper>
        </div>
      </Container>
    </Section>
  );
};
