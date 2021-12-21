import React from 'react';
import { Container, Col } from 'react-bootstrap';

import tilu from "../images/tilu.jpeg";
 
const About = () => {
    return (
       <Container>
          <div className="content">
            <div>
               <h2>My name is Tilu Arora, and I'm a Construction Manager.</h2>
               <p>I have experience in new home constructions and renovations.</p>
               <p>I operate in the Silicon Valley</p>
               <p>My projects have successfully increased home values by 10x</p>
            </div>
            <div>
               <img src={tilu} width="400"/>{' '}
            </div>
          </div>
       </Container>
    );
}
 
export default About;