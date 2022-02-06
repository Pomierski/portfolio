import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";
import Container from "./components/Container";
import About from "./sections/About";
import ContactCard from "./sections/ContactCard";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import MobileNav from "./sections/MobileNav";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import theme from "./styles/theme";

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
          <ContactCard />
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;

/*
        <Card
          title="Marbond.pl"
          subTitle="Strona wizytówka"
          previewImg="https://www.designbombs.com/wp-content/uploads/2017/02/make-a-website-1280x720.jpg"
          icons={[
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          ]}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Card>
        */
