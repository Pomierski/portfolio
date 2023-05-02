import { useTranslation } from "react-i18next";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading/Heading";
import { Section } from "../../components/Section";
import { Text } from "../../components/Text/Text";
import { Timeline } from "../../components/Timeline";
import { getMonthDiffUntillNow } from "../../utils/getMonthsDiffUntillNow";

const currentYear = new Date().getFullYear();
const currentPositionStartDate = new Date("2022-04-01");

export const About = () => {
  const { t } = useTranslation();
  const getCurrentPositionEmploymentTime = () => {
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
      <Container>
        <div>
          <Heading>{t("about.aboutMe")}</Heading>
          <Text>{t("about.bio", { years: currentYear - 2016 })}</Text>
        </div>
        <div>
          <Heading>{t("about.experience")}</Heading>
          <Timeline
            positions={[
              {
                title: "Junior frontend developer (React)",
                description: `${t("about.april")} 2022 - ${t(
                  "about.currently"
                )} · ${getCurrentPositionEmploymentTime()}`,
                company: "Shiji Poland",
              },
              {
                title: "Junior frontend developer (Angular)",
                description: `${t("about.september")} 2021 - ${t(
                  "about.december"
                )} 2021 · ${t("about.months", { count: 4 })}`,
                company: "Tom&Co",
              },
              {
                title: "Staż Junior frontend developer (Angular)",
                description: `${t("about.october")} 2021 - ${t(
                  "about.september"
                )} 2021 · ${t("about.months", { count: 1 })}`,
                company: "Tom&Co",
              },
            ]}
          />
        </div>
      </Container>
    </Section>
  );
};
