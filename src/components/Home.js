import React from 'react';
import myPicture from '../assets/renee.jpg'; 

const Home = () => (
    <section id="home" style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img src={myPicture} alt="Renee" style={{ width: '300px', height: '300px', borderRadius: '50%', marginRight: '20px' }} />
        <div>
          <h1 style={{ fontSize: '100px', margin: '0' }}>Hello I'm Renee...</h1>
          <h3 style={{ fontSize: '1.5em', marginTop: '0.5em' }}>a third year computer science student at Queen's University with a focus in AI.</h3>
        </div>
      </div>
    </section>
  );
  
  export default Home;
