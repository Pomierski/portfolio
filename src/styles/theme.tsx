export type Theme = Readonly<typeof theme>;

export const theme = {
  color: {
    main: "#fff",
    secondary: "#BDBDBD",
    accent: "#ffc400",
    darkAccent: "#daa800",
    darkAccentBg: "#816301",
    bg: "#1e1e1e",
    darkBg: "#161616",
  },
  fontSize: {
    default: "1rem",
    xs: "0.8rem",
    sm: "1.2rem",
    md: "1.5rem",
    lg: "2.5rem",
    xl: "3.5rem",
  },
  sectionGap: "2.5rem",
  screenSize: {
    gFold: "280px",
    sm: "790px",
    md: "835px",
    lg: "992px",
    xl: "1200px",
  },
  horizontalHeightLimit: "400px",
  navbarHeight: "4rem",
  boxShadow: {
    default: "0 15px 24px -10px rgb(0 0 0 / 15%)",
  },
};
