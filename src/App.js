import React from 'react';
import './App.css';
import Introduction from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;