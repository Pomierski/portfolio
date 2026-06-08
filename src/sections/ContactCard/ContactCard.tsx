import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import { SectionIds } from "../sectionIds";

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 1.5rem;
  font-family: ${(props) => props.theme.fontFamily.mono};
  background: ${(props) => props.theme.color.panel};
  border: 1px solid ${(props) => props.theme.color.accent};
  margin: 3rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::before {
    content: "// 06 ─ contact";
    position: absolute;
    top: -0.65rem;
    left: 1rem;
    background: ${(props) => props.theme.color.bg};
    padding: 0 0.5rem;
    color: ${(props) => props.theme.color.accent};
    font-size: 0.72rem;
    letter-spacing: 0.05em;
  }

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    grid-column: 1 / 3;
    padding: 2.5rem 2rem;
  }
`;

const TextWrapper = styled.div`
  margin: 0 auto 1.5rem auto;
  width: fit-content;
  text-align: center;
`;

const Prefix = styled.p`
  font-size: 0.85rem;
  color: ${(props) => props.theme.color.secondary};
  margin: 0 0 0.5rem 0;
  letter-spacing: 0.04em;

  &::before {
    content: "▸ ";
    color: ${(props) => props.theme.color.accent};
  }
`;

const Heading = styled.h2`
  margin: 0;
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily.mono};
  color: ${(props) => props.theme.color.main};
  font-size: 1.75rem;
  text-transform: lowercase;
  letter-spacing: -0.02em;
`;

export const ContactCard = () => {
  const { t } = useTranslation();
  return (
    <Wrapper id={SectionIds.contact}>
      <TextWrapper>
        <Prefix>{t("contact.intrested")}</Prefix>
        <Heading>{t("contact.contactMe")}</Heading>
      </TextWrapper>
      <Button center fill href="mailto: pomierskipiotr@gmail.com">
        {t("contact.contact")}
      </Button>
    </Wrapper>
  );
};
