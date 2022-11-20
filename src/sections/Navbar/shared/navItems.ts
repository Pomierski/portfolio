import { NavListItem } from "../../../components/NavList";
import { SectionIds } from "../../sectionIds";

export const navItems: NavListItem[] = [
  {
    content: "Technologie",
    linkTo: SectionIds.skills,
    smooth: true,
    offset: -10,
  },
  {
    content: "Projekty",
    linkTo: SectionIds.projects,
    smooth: true,
    offset: -10,
  },
  {
    content: "Kontakt",
    linkTo: SectionIds.contact,
    smooth: true,
  },
];
