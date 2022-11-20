import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import { SectionIds } from "../sectionIds";

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 3rem;
  color: ${(props) => props.theme.color.accent};
  border: 1px solid ${(props) => props.theme.color.accent};
  margin: 2.5rem 0 5rem 0;
  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    grid-column: 1 / 3;
  }
`;

const Heading = styled.h2`
  margin-top: 0;
  text-align: center;
`;

const TextWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

export const ContactCard = () => {
  const { t } = useTranslation();
  return (
    <Wrapper id={SectionIds.contact}>
      <TextWrapper>
        <p>{t("contact.intrested")}</p>
        <Heading>{t("contact.contactMe")}</Heading>
      </TextWrapper>
      <Button center href="mailto: pomierskipiotr@gmail.com">
        {t("contact.contact")}
      </Button>
    </Wrapper>
  );
};
