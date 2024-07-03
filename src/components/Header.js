import React from 'react';
import { Link } from 'react-scroll';

const Header = () => (
  <header style={styles.header}>
    <nav style={styles.nav}>
      <Link to="home" smooth={true} duration={500} style={styles.link}><b>Home</b></Link>
      <Link to="aboutme" smooth={true} duration={500} style={styles.link}><b>About Me</b></Link>
      <Link to="projects" smooth={true} duration={500} style={styles.link}><b>Projects</b></Link>
      <Link to="contactme" smooth={true} duration={500} style={styles.link}><b>Contact Me</b></Link>
    </nav>
  </header>
);

const styles = {
  header: {
    position: 'fixed',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 100, 0.25)',
    padding: '1em 0',
    textAlign: 'center',
    zIndex: 1000,
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10%',
  },
  link: {
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '1.2em',
  }
};

export default Header;
