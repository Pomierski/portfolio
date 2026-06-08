export type Theme = Readonly<typeof theme>;

export const theme = {
  color: {
    main: "#e8e8e8",
    secondary: "#8a8a8a",
    muted: "#4a4a4a",
    accent: "#fc6d26",
    darkAccent: "#e24329",
    lightAccent: "#fca326",
    darkAccentBg: "#3a1a08",
    bg: "#0d0d0d",
    darkBg: "#161616",
    panel: "#1a1a1a",
    border: "#2a2a2a",
    paper: "#f4f1ea",
    success: "#5cb85c",
    warning: "#fca326",
    fail: "#e24329",
  },
  fontFamily: {
    mono: '"JetBrains Mono", "Fira Code", "SF Mono", Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  fontSize: {
    default: "0.95rem",
    xxs: "0.7rem",
    xs: "0.8rem",
    sm: "1rem",
    md: "1.35rem",
    lg: "2.25rem",
    xl: "3.25rem",
  },
  sectionGap: "3rem",
  screenSize: {
    gFold: "280px",
    sm: "790px",
    md: "835px",
    lg: "992px",
    xl: "1200px",
  },
  horizontalHeightLimit: "400px",
  navbarHeight: "2.5rem",
  boxShadow: {
    default: "0 0 0 1px rgba(252, 109, 38, 0.05)",
    panel: "4px 4px 0 0 rgba(252, 109, 38, 0.15)",
  },
};
