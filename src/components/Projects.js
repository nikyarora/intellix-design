import React from 'react';
import './Projects.css';
import { Container, Row, Card, Col, Button, Modal, Carousel } from 'react-bootstrap';
import home3 from "../images/home3.jpeg";
 
function Projects() {
   const [modalShow, setModalShow] = React.useState(false);

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
              {props.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
            <Carousel>
               {Array.from({ length: 6 }).map((_, idx) => (
                     <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={home3}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <p>Kitchen</p>
                        </Carousel.Caption>
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
                  {Array.from({ length: 6 }).map((_, idx) => (
                     <Col>
                        <Card>
                        <Card.Img variant="top" src={home3} />
                        <Card.Body>
                           <Card.Title>ADU</Card.Title>
                           <Card.Text>
                              This is a longer card with supporting text below as a natural
                              lead-in to additional content. This content is a little bit longer.
                           </Card.Text>
                           <>
                              <Button variant="outline-info" onClick={() => setModalShow(true)}>
                                 Open
                              </Button>
                        
                              <MyVerticallyCenteredModal
                                 show={modalShow}
                                 onHide={() => setModalShow(false)}
                                 name="ADU"
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