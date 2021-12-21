import React from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';
import './Home.css';
import logo from "../images/logo.svg";
import home2 from "../images/home2.jpeg";
import home1 from "../images/corte-madera-1.jpeg";
import home3 from "../images/home3.jpeg";


const home = () => {
    return (
       <Container>
           <div className="content-home">
               <div>
                   <h2>Intellix Design</h2>
                   <p>Building and renovating homes in the heart of Silicon Valley for over 10 years</p>
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
                    <p>12670 Corte Madera Lane, Los Altos Hills</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={home2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <p>123 Happy Street, Palo Alto</p>
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
                    <li>Home Design</li>
                    <li>Floorplan creation</li>
                </ul>
               </div>
               </div>
               <div className="tab-item">
               <div className="tab-text">Construction Management</div>
               <div className="tab-list">
                <ul>
                    <li>Home Design</li>
                    <li>Floorplan creation</li>
                </ul>
               </div>
               </div>
               <div className="tab-item">
               <div className="tab-text">Interior Design</div>
               <div className="tab-list">
                <ul>
                    <li>Home Design</li>
                    <li>Floorplan creation</li>
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