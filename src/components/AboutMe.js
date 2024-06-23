import React from 'react';
import SlideShow from './Slideshow';
import resumePDF from '../assets/resume.pdf';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg'; 

const AboutMe = () => {
  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6
  ];

  return (
    <section id="aboutme" style={{ textAlign: 'center' }}>
      <div style={styles.container}>
        <h2>About Me</h2>
        <p>As a dedicated and enthusiastic <b>computer science</b> student at Queen’s University, I am eager to display my technical skills, academic achievements, and passion for software development. Currently pursuing a bachelor's degree in computer science, I have developed a solid foundation in <b>JavaScript, Python, Java, HTML, Linux and CSS</b>.</p>
        <p>In addition to my academic pursuits, I am currently a <b>Research Assistant</b> at Queen’s University. In this role, I collaborate with two Master's students and one Postdoctoral researcher to <b>evaluate the efficiency of different prompting methods when using LLMs</b> (Large Language Models). Utilizing natural language processing techniques and large language models, I have contributed to automating the labeling process, enhancing efficiency and accuracy in our research endeavors.</p>
        <p>Additionally, my participation in <b>Queen’s Women in Computing and QMIND</b> has provided me with hands-on experience and honed my problem-solving abilities. One of my most rewarding experiences was redesigning the entire <b>Queen’s Women in Computing</b> Website and implementing it using React. This experience not only strengthened my technical skills but also taught me the importance of collaboration, communication, and adaptability in a team environment.</p>
        <p>Outside of my academic and technical pursuits, I am an avid dancer and figure skater. I was on the Queen’s Varsity Figure Skating team as well as the competitive hip hop team named “Casually Cool Dance Crew”. Through these hobbies, I have cultivated discipline, creativity, and perseverance, which I believe are transferable skills that complement my academic achievements and professional aspirations. I also have a cat named Apollo!! (see in slide show)</p>
       </div> 
        <div style={{ width: '100%', margin: '0 auto'}}>
          <SlideShow images={images} />
        </div>
        <div style={{ marginTop: '20px' }}>
          <p>
            <a href={resumePDF} download>Download my resume</a>
          </p>
        </div>
    </section>
  );
};

const styles = {
  container: {
    maxWidth: '50%',
    margin: '0 auto', 
  }
};

export default AboutMe;
