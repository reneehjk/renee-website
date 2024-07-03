import React, { useState, useEffect } from 'react';
import SlideShow from './Slideshow';
import resumePDF from '../assets/resume.pdf';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';

const CardSlideShow = ({ paragraphs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, [paragraphs.length]);

  return (
    <div style={styles.card}>
      {paragraphs[currentIndex]}
    </div>
  );
};

const AboutMe = () => {
  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6
  ];

  const paragraphs = [
    <p key="1">As a dedicated and enthusiastic <b>computer science</b> student at Queen’s University, I am eager to display my technical skills, academic achievements, and passion for software development. Currently pursuing a bachelor's degree in computer science, I have developed a solid foundation in <b>JavaScript, Python, Java, HTML, Linux and CSS</b>.</p>,
    <p key="2">In addition to my academic pursuits, I am currently a <b>Research Assistant</b> at Queen’s University. In this role, I collaborate with two Master's students and one Postdoctoral researcher to <b>evaluate the efficiency of different prompting methods when using LLMs</b> (Large Language Models). Utilizing natural language processing techniques and large language models, I have contributed to automating the labeling process, enhancing efficiency and accuracy in our research endeavors.</p>,
    <p key="3">Additionally, my participation in <b>Queen’s Women in Computing</b> and <b>QMIND</b> has provided me with hands-on experience and honed my problem-solving abilities. One of my most rewarding experiences was redesigning the entire Queen’s Women in Computing Website and implementing it using React. This experience not only strengthened my technical skills but also taught me the importance of collaboration, communication, and adaptability in a team environment.</p>,
    <p key="4">Outside of my academic and technical pursuits, I am an avid dancer and figure skater. I was on the Queen’s Varsity Figure Skating team as well as the competitive hip hop team named “Casually Cool Dance Crew”. Through these hobbies, I have cultivated discipline, creativity, and perseverance, which I believe are transferable skills that complement my academic achievements and professional aspirations. I also have a cat named Apollo!! (see in slide show)</p>,
  ];

  return (
    <section id="aboutme" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '130%' }}>
      <div style={styles.textContainer}>
        <h2>About Me</h2>
        <CardSlideShow paragraphs={paragraphs} />
        <div style={{ marginTop: '20px' }}>
          <p>
            <a href={resumePDF} download>Download my resume</a>
          </p>
        </div>
      </div>
      <div style={styles.slideshowContainer}>
        <SlideShow images={images} />
      </div>
    </section>
  );
};

const styles = {
  textContainer: {
    marginLeft: '10%',
    flex: 1,
    maxWidth: '50%',
    margin: '0 20px', 
    paddingBottom: '40px',
    textAlign: 'left',
  },
  slideshowContainer: {
    flex: 1,
    maxWidth: '50%',
  },
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '40px',
    backgroundColor: '#f9f9f9',
    height: '400px',
    width: '100%', 
    maxWidth: '600px', 
    overflow: 'hidden', 
    textAlign: 'center',
    paddingLeft: '30px',
    paddingRight: '30px', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    
  }
};

export default AboutMe;
