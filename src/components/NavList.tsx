import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import styled from "styled-components";

interface PropTypes {
  items: NavListItem[];
}

export interface NavListItem {
  translaionPath: string;
  linkTo: string;
  smooth?: boolean;
  offset?: number;
}

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    margin-left: 1rem;
    display: flex;
    align-items: center;
    z-index: 99;
    gap: 0.25rem;
  }
`;

const ListItem = styled.li`
  font-family: ${(props) => props.theme.fontFamily.mono};
  color: ${(props) => props.theme.color.secondary};
  font-size: 1.25rem;
  padding: 0.25rem 0;
  text-transform: lowercase;
  letter-spacing: 0.02em;

  & a {
    cursor: pointer;
    transition: color 0.15s ease-out;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  & a::before {
    content: "[ ";
    color: ${(props) => props.theme.color.muted};
    transition: color 0.15s ease-out;
  }

  & a::after {
    content: " ]";
    color: ${(props) => props.theme.color.muted};
    transition: color 0.15s ease-out;
  }

  & a:hover,
  & a:hover::before,
  & a:hover::after {
    color: ${(props) => props.theme.color.accent};
  }

  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    font-size: 0.85rem;
    margin: 0;
    padding: 0;
  }
`;

export const Navlist = ({ items }: PropTypes) => {
  const { t } = useTranslation();

  return (
    <List>
      {items.map((item, key) => (
        <ListItem key={key}>
          <Link to={item.linkTo} smooth={item.smooth} offset={item.offset ?? 0}>
            {t(item.translaionPath)}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
