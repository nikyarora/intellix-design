import React from 'react';
import './Projects.css';
import { Container, Row, Card, Col } from 'react-bootstrap';
import home3 from "../images/home3.jpeg";
 
const projects = () => {
    return (
        <Container>
           <div className="content">
             <div>
                <h2>Projects</h2>
                <div className="projects-container">
                <Row xs={1} md={3} className="g-4">
                  {Array.from({ length: 6 }).map((_, idx) => (
                     <Col>
                        <Card>
                        <Card.Img variant="top" src={home3} />
                        <Card.Body>
                           <Card.Title>Address Here</Card.Title>
                           <Card.Text>
                              This is a longer card with supporting text below as a natural
                              lead-in to additional content. This content is a little bit longer.
                           </Card.Text>
                        </Card.Body>
                        </Card>
                     </Col>
                  ))}
               </Row>
                </div>
             </div>
           </div>
        </Container>
     );
}
 
export default projects;