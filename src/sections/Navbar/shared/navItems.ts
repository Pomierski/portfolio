import { NavListItem } from "../../../components/NavList";
import { SectionIds } from "../../sectionIds";

export const navItems: NavListItem[] = [
  {
    translaionPath: "skills.heading",
    linkTo: SectionIds.skills,
    smooth: true,
    offset: -10,
  },
  {
    translaionPath: "projects.heading",
    linkTo: SectionIds.projects,
    smooth: true,
    offset: -10,
  },
  {
    translaionPath: "contact.contact",
    linkTo: SectionIds.contact,
    smooth: true,
  },
];
