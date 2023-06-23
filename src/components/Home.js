import React from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';
import './Home.css';

import {CorteMadera_1, CorteMadera_5, CorteMadera_Landscape_1, CorteMadera_Landscape_2} from "../images"


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
                    src={CorteMadera_1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={CorteMadera_5}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={CorteMadera_Landscape_1}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={CorteMadera_Landscape_2}
                    alt="Third slide"
                    />
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
                    <li>ADU Construction</li>
                    <li>Remodels</li>
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
                    <li>Space Planning</li>
                    <li>Color Planning</li>
                    <li>Home Finishes</li>
                    <li>Furnishing</li>
                    <li>Tiling</li>
                </ul>
               </div>
               </div>
               <div className="tab-item">
               <div className="tab-text">Landscaping</div>
               <div className="tab-list">
                <ul>
                    <li>Gardening</li>
                    <li>Exterior Design</li>
                    <li>Pools</li>
                    <li>Sports Courts</li>
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