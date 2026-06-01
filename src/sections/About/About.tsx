import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Heading } from "../../components/Heading/Heading";
import { Section } from "../../components/Section";
import { Text } from "../../components/Text/Text";
import { Timeline } from "../../components/Timeline";
import { getMonthDiffUntillNow } from "../../utils/getMonthsDiffUntillNow";

const Grid = styled.div`
  width: 100%;
  min-width: 0;

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    grid-column-gap: 2.5rem;

    & > * {
      min-width: 0;
    }
  }
`;

const currentYear = new Date().getFullYear();

export const About = () => {
  const { t } = useTranslation();
  const getCurrentPositionEmploymentTime = (currentPositionStartDate: Date) => {
    const monthDiff = getMonthDiffUntillNow(currentPositionStartDate);
    const years = Math.floor(monthDiff / 12);
    const months = monthDiff % 12;
    const fullTime = [];

    if (years >= 1) {
      fullTime.push(t("about.year", { count: years }));
    }
    if (months >= 1) {
      fullTime.push(t("about.months", { count: months + 1 }));
    }

    return fullTime.join(" ");
  };

  return (
    <Section id="about" gridCol="1 / 3">
      <Grid>
        <div>
          <Heading stage="01 ─ about">{t("about.aboutMe")}</Heading>
          <Text>{t("about.bioHook")}</Text>
          <Text>{t("about.bioEvidence", { years: currentYear - 2021 })}</Text>
          <Text>{t("about.bioNext")}</Text>
        </div>
        <div>
          <Heading stage="02 ─ experience">{t("about.experience")}</Heading>
          <Timeline
            positions={[
              {
                title: t("about.positionCurrent"),
                description: `${t("about.july")} 2023 - ${t(
                  "about.currently"
                )} · ${getCurrentPositionEmploymentTime(
                  new Date("2023-07-01")
                )}`,
                company: "Shiji Poland",
              },
              {
                title: t("about.positionJunior"),
                description: `${t("about.april")} 2022 - ${t(
                  "about.june"
                )} 2023 · ${t("about.year", { count: 1 })} ${t("about.months", {
                  count: 3,
                })}`,
                company: "Shiji Poland",
              },
              {
                title: t("about.positionAngular"),
                description: `${t("about.september")} 2021 - ${t(
                  "about.march"
                )} 2022 · ${t("about.months", { count: 7 })}`,
                company: "Tom&Co",
              },
            ]}
          />
        </div>
      </Grid>
    </Section>
  );
};
