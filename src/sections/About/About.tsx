import { useTranslation } from "react-i18next";
import Container from "../../components/Container";
import Heading from "../../components/Heading/Heading";
import Section from "../../components/Section";
import Text from "../../components/Text/Text";
import Timeline from "../../components/Timeline";

const currentYear = new Date().getFullYear();

const About = () => {
  const { t } = useTranslation();
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
                )}`,
                company: "Shiji Poland",
              },
              {
                title: "Junior frontend developer (Angular)",
                description: `${t("about.september")} 2021 - ${t(
                  "about.december"
                )} 2021 · 4 ${t("about.months")}`,
                company: "Tom&Co",
              },
              {
                title: "Staż Junior frontend developer (Angular)",
                description: `${t("about.october")} 2021 - ${t(
                  "about.september"
                )} 2021 · 1 ${t("about.months")}`,
                company: "Tom&Co",
              },
            ]}
          />
        </div>
      </Container>
    </Section>
  );
};

export default About;
