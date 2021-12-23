import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';

import tilu from "../images/tilu.jpeg";
 
const About = () => {
    return (
       <Container>
          <div className="content">
            <div>
               <h2>About Us</h2>
               <div className="about-container">
               <p>My name is Tilu Arora and I have been operating as a construction manager in the Silicon Valley for over 15 years.</p>
               <p>I have experience in new home constructions and renovations.</p>
               <p>I operate in the Silicon Valley</p>
               <p>My projects have successfully increased home values by 10x</p>
               </div>
            </div>
            <div>
               <img src={tilu} width="400"/>{' '}
            </div>
          </div>
       </Container>
    );
}
 
export default About;