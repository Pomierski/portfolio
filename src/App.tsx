import { useRef } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/Container";
import { About } from "./sections/About/About";
import { ContactCard } from "./sections/ContactCard/ContactCard";
import { Contributions } from "./sections/Contributions/Contributions";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero/Hero";
import { MobileNav } from "./sections/Navbar/MobileNav";
import { Navbar } from "./sections/Navbar/Navbar";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";
import { theme } from "./styles/theme";

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App" ref={appRef}>
      <ThemeProvider theme={theme}>
        <Container>
          <MobileNav outsideRef={appRef} />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contributions />
          <ContactCard />
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
