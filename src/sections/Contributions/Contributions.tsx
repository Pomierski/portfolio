import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { Contribution, ContributionProps } from "../../components/Contribution";
import { Heading } from "../../components/Heading/Heading";
import { Section } from "../../components/Section";
import { Text } from "../../components/Text/Text";

const contirbutionsData: ContributionProps[] = [
  {
    repoName: "stable-diffusion-webui",
    repoAuthor: "AUTOMATIC1111",
    contributionUrl:
      "https://github.com/AUTOMATIC1111/stable-diffusion-webui/pull/7412",
    stars: 84000,
  },
  {
    repoName: "grafana",
    repoAuthor: "grafana",
    contributionUrl: "https://github.com/grafana/grafana/pull/54389",
    stars: 55800,
  },
  {
    repoName: "DOMPurify",
    repoAuthor: "cure53",
    contributionUrl: "https://github.com/cure53/DOMPurify/pull/732",
    stars: 11200,
  },
  {
    repoName: "DreamBerd",
    repoAuthor: "TodePond",
    contributionUrl: "https://github.com/TodePond/DreamBerd/pull/46",
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
