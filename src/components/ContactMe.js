import React from 'react';

const ContactMe = () => (
  <footer id="contactme" style={styles.footer}>
    <h4>Contact Me</h4>
    <div style={styles.links}>
      <a href="https://devpost.com/reneehjkim11" target="_blank" rel="noopener noreferrer" style={styles.link}>
        Devpost
      </a>
      <a href="https://www.linkedin.com/in/reneehjkim" target="_blank" rel="noopener noreferrer" style={styles.link}>
        LinkedIn
      </a>
      <a href="https://github.com/reneehjk" target="_blank" rel="noopener noreferrer" style={styles.link}>
        GitHub
      </a>
      <a href="mailto:reneehjkim11@gmail.com" style={styles.link}>
        Email
      </a>
    </div>
  </footer>
);

const styles = {
  footer: {
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 100, 0.25)',
    color: 'white',
    textAlign: 'center',
    zIndex: 1000,
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10%',
    marginTop: '1em',
  },
  link: {
    color: '#002366',
    textDecoration: 'none',
    fontSize: '1.2em',
  }
};

export default ContactMe;
