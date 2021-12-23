import React from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';
import './Home.css';
import home1 from "../images/home1.jpeg";
import home2 from "../images/home2.jpeg";
import home3 from "../images/home3.jpeg";


const home = () => {
    return (
       <Container>
           <div className="content-home">
               <div>
                   <h2>Intellix Design</h2>
                   <p>Building and renovating homes in the heart of Silicon Valley for over 15 years</p>
                   <Button href="/about" variant="outline-primary">About</Button>{' '}
               </div>
               <div className="image-gallery">
               <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={home1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Address Here</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={home2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <p>Address Here</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={home3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <p>Address Here</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                </div>
           </div>
           <div className="home-bottom">
           <div className="tab-container">
               <div className="tab-item">
               <div className="tab-text">Home Architecture</div>
               <div className="tab-list">
                <ul>
                    <li>Project Scoping</li>
                    <li>Project Estimates</li>
                    <li>Home Design</li>
                    <li>Floorplan Creation</li>
                </ul>
               </div>
               </div>
               <div className="tab-item">
               <div className="tab-text">Construction Management</div>
               <div className="tab-list">
                <ul>
                    <li>Contractor Support</li>
                    <li>Exceptional Team Relationships</li>
                    <li>Permit Process</li>
                    <li>Construction Supervision</li>
                </ul>
               </div>
               </div>
               <div className="tab-item">
               <div className="tab-text">Interior Design</div>
               <div className="tab-list">
                <ul>
                    <li>Home Finishes</li>
                    <li>Furnishing</li>
                    <li>Tiling</li>
                </ul>
               </div>
               </div>
            </div>
            <div className="home-button">
                <Button href="/projects" variant="outline-light">Projects</Button>{' '}
            </div>
            </div>
       </Container>
    );
}
 
export default home;