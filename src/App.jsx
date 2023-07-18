import React from "react";
import Experience from "./components/Experience";
import Nav from "./components/Nav";
import NavContent from "./components/NavContent";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <NavContent />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
