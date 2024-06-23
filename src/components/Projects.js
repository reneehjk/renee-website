import React from 'react';
import TodoPic from '../assets/todoList.png';
import SonderPic from '../assets/Sonder.png';
import calCalculator from '../assets/calCalculator.png';
import roomieMatch from '../assets/roomieMatch.png'

const Projects = () => (
  <section id="projects" style={{ padding: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h2>Projects</h2>
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px' }}>
    <div style={{ width: '400px', textAlign: 'center' }}>
      <a href="https://github.com/reneehjk/roomie-match" target="_blank" rel="noopener noreferrer">
        <img src={roomieMatch} alt="RoomieMatch" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
      </a>
      <div style={{ padding: '1em', color: '#002366' }}> 
        RoomieMatch
      </div>
    </div>
    <div style={{ width: '400px', textAlign: 'center' }}>
      <a href="https://github.com/reneehjk/calorie-calculator" target="_blank" rel="noopener noreferrer">
        <img src={calCalculator} alt="Sonder." style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
      </a>
      <div style={{ padding: '1em', color: '#002366' }}> {/* Title div */}
        Calorie Calculator
      </div>
    </div>
    <div style={{ width: '400px', textAlign: 'center' }}>
      <a href="https://github.com/reneehjk/Todo-List" target="_blank" rel="noopener noreferrer">
        <img src={TodoPic} alt="Todo List" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
      </a>
      <div style={{ padding: '1em', color: '#002366' }}> {/* Title div */}
        Todo List
      </div>
    </div>
    <div style={{ width: '400px', textAlign: 'center' }}>
      <a href="https://github.com/reneehjk/Sonder." target="_blank" rel="noopener noreferrer">
        <img src={SonderPic} alt="Sonder." style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
      </a>
      <div style={{ padding: '1em', color: '#002366' }}> {/* Title div */}
        Sonder
      </div>
    </div>
  </div>
  <h3>More to come...</h3>
</section>
);

export default Projects;
