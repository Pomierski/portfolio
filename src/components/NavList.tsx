import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

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

const Navlist = () => (
  <List>
    <ListItem>
      <Link to="skills" smooth offset={-10}>
        Technologie
      </Link>
    </ListItem>
    <ListItem>
      <Link to="projects" smooth offset={-10}>
        Projekty
      </Link>
    </ListItem>
    <ListItem>
      <Link to="contact" smooth>
        Kontakt
      </Link>
    </ListItem>
  </List>
);

export default Navlist;
