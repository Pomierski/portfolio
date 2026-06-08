import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Navlist } from "../../components/NavList";
import { navItems } from "./shared/navItems";

const Wrapper = styled.header`
  display: none;
  z-index: 5;
  font-family: ${(props) => props.theme.fontFamily.mono};

  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    display: flex;
    height: ${(props) => props.theme.navbarHeight};
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.25rem;
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    background: rgba(13, 13, 13, 0.85);
    backdrop-filter: blur(8px);
    position: sticky;
    top: 0;
    margin-bottom: 1.5rem;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: ${(props) => props.theme.color.secondary};
  letter-spacing: 0.04em;

  & > strong {
    color: ${(props) => props.theme.color.accent};
    font-weight: 700;
  }
`;

const StatusDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  background: ${(props) => props.theme.color.success};
  margin-right: 0.35rem;
  animation: pulse 1.6s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LangButton = styled.button`
  font-family: ${(props) => props.theme.fontFamily.mono};
  font-size: 0.75rem;
  color: ${(props) => props.theme.color.secondary};
  background: none;
  border: 1px solid ${(props) => props.theme.color.border};
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: all 0.15s ease-out;

  &:hover {
    color: ${(props) => props.theme.color.accent};
    border-color: ${(props) => props.theme.color.accent};
  }
`;

export const Navbar = () => {
  const { i18n } = useTranslation();
  const toggle = () => i18n.changeLanguage(i18n.language === "pl" ? "en" : "pl");

  return (
    <Wrapper>
      <Brand>
        <StatusDot />
        <strong>~/portfolio</strong>
      </Brand>
      <Right>
        <Navlist items={navItems} />
        <LangButton onClick={toggle}>
          {i18n.language === "pl" ? "EN" : "PL"}
        </LangButton>
      </Right>
    </Wrapper>
  );
};
