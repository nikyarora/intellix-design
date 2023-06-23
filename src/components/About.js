import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';

import {Tilu} from "../images"
 
const About = () => {
    return (
       <Container>
          <div className="content">
            <div>
               <h2>About Us</h2>
               <div className="about-container">
               <p>Established in 1999, Intellix Design Inc. has been providing project management, design, and construction services.  Intellix Design provides excellence across a full spectrum of services ranging from pre-construction, project management, design development, construction, interior design management, inspection, and landscaping. Intellix management has worked on and managed construction projects for over 20 years and over $500 million.</p>
               {/* <h4>Leadership</h4> */}
               <h5 className={"space"}>Tilu Arora, President</h5>
               <p>Tilu’s path began in India, where she was born and enjoyed a humble upbringing until she immigrated to the US as a student. Tilu studied engineering in Connecticut and earned a bachelors and master’s degree.  Her career started working in designing and managing customer facing technology solutions for high technology companies in the Silicon Valley. Tilu's travels made way for her love of design and architecture.  Over the past 20 years, she has managed over 100 small to large scale construction projects ranging from small interior remodels, building ADU’s, landscaping, and full home construction.</p>
               </div>
            </div>
            <div>
               <img src={Tilu} width="400"/>{' '}
            </div>
          </div>
       </Container>
    );
}
 
export default About;