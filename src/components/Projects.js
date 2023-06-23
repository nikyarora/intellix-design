import React from 'react';
import './Projects.css';
import { Container, Row, Card, Col, Button, Modal, Carousel } from 'react-bootstrap';
import {CorteMadera_1, CorteMadera_2, CorteMadera_3, CorteMadera_4, CorteMadera_5} from "../images"
import {CorteMadera_Landscape_1, CorteMadera_Landscape_2, CorteMadera_Landscape_3, CorteMadera_Landscape_4, CorteMadera_Landscape_5, CorteMadera_Landscape_6} from "../images"
import {Guesthouse_1, Guesthouse_2, Guesthouse_3, Guesthouse_4, Guesthouse_5, Guesthouse_6, Guesthouse_7} from "../images"
import {Sportscourt_1, Sportscourt_2, Sportscourt_3} from "../images"

function Projects() {
   const [modalShow, setModalShow] = React.useState(false);
   const project_titles = ["New Home Construction", "Landscaping", "Guest House ADU", "Sportscourt"]
   const project_images = {"New Home Construction" : [CorteMadera_1, CorteMadera_2, CorteMadera_3, CorteMadera_4, CorteMadera_5],
                           "Landscaping" : [CorteMadera_Landscape_1, CorteMadera_Landscape_2, CorteMadera_Landscape_3, CorteMadera_Landscape_4, CorteMadera_Landscape_5, CorteMadera_Landscape_6],
                           "Guest House ADU" : [Guesthouse_1, Guesthouse_2, Guesthouse_3, Guesthouse_4, Guesthouse_5, Guesthouse_6, Guesthouse_7],
                           "Sportscourt" : [Sportscourt_1, Sportscourt_2, Sportscourt_3]}
   const project_descriptions = ["Experienced construction manager overseeing complete demolition and skillfully orchestrating the construction of a beautiful single-family home, ensuring efficiency, quality, and adherence to timelines and budget.",
                                 "Transforming a neglected yard into an oasis with lush greenery, vibrant flowers, and inviting pathways, creating a stunning landscape that captivates and delights.",
                                 "Crafting a cozy one-bedroom guest house ADU, thoughtfully designed to provide comfort and privacy, blending modern amenities with a welcoming ambiance, creating a perfect retreat for guests or renters.",
                                 "Constructing a versatile sports court, meticulously engineered to accommodate various activities, featuring a durable surface, proper markings, and optimal dimensions, fostering a space for active recreation and friendly competition."]
   const [modalName, setModalName] = React.useState(project_titles[0])
   const [modalId, setModalId] = React.useState(0)

   function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {modalName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {project_descriptions[modalId]}
            </p>
            <Carousel>
               {Array.from({ length: project_images[modalName].length }).map((_, idx) => (
                     <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={project_images[modalName][idx]}
                        alt="slide"
                        />
                     </Carousel.Item>
               ))}
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }

    return (
        <Container>
           <div className="content">
             <div>
                <h2>Projects</h2>
                <div className="projects-container">
                <Row xs={1} md={3} className="g-4">
                  {Array.from({ length: project_titles.length }).map((_, idx) => (
                     <Col>
                        <Card>
                        <Card.Img variant="top" src={project_images[project_titles[idx]][0]} />
                        <Card.Body>
                           <Card.Title>{project_titles[idx]}</Card.Title>
                           <Card.Text>
                              {project_descriptions[idx]}
                           </Card.Text>
                           <>
                              <Button variant="outline-info" onClick={() => {
                                 setModalShow(true)
                                 setModalName(project_titles[idx])
                                 setModalId(idx)
                              }}
                              >
                                 Open
                              </Button>
                        
                              <MyVerticallyCenteredModal
                                 key={project_titles[idx]}
                                 show={modalShow}
                                 onHide={() => setModalShow(false)}
                                 name={project_titles[idx]}
                              />
                           </>
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
 
export default Projects;