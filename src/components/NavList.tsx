import { Link } from "react-scroll";
import styled from "styled-components";

interface PropTypes {
  items: NavListItem[];
}

export interface NavListItem {
  content: string;
  linkTo: string;
  smooth?: boolean;
  offset?: number;
}

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    margin-left: 1rem;
    display: flex;
    z-index: 99;
  }
  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    margin-left: 0;
  }
`;

const ListItem = styled.li`
  color: ${(props) => props.theme.color.accent};
  font-size: 1.5rem;
  padding: 0.25rem 0;
  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}) and (min-height: ${(props) =>
      props.theme.horizontalHeightLimit}) {
    font-size: 1rem;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

export const Navlist = ({ items }: PropTypes) => (
  <List>
    {items.map((item) => (
      <ListItem>
        <Link to={item.linkTo} smooth={item.smooth} offset={item.offset ?? 0}>
          {item.content}
        </Link>
      </ListItem>
    ))}
  </List>
);
