import React from 'react';

import Layout from "../src/components/Layout/Layout";
import Hero from './components/Hero/Hero';
import AboutMe from './components/About/AboutMe';
import ContactMe from './components/Contact/ContactMe';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Publications from './components/Publications/Publications';
import ContactForm from './components/Contact/ContactForm';
import FindMe from './components/Find Me/FindMe';

function App() {

  return (
    <>
      <Layout>
        <div className="min-h-80 max-h-fit">
          <Hero />
          <AboutMe />
          <ContactMe />
          <Education />
          <Skills />
          <Projects />
          <Publications />
          <ContactForm />
          <FindMe />
        </div>
      </Layout>
    </>
  )
}

export default App
