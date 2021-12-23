import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import './Contact.css';
import home3 from "../images/home3.jpeg";

const Contact = () => {
   return (
      <Container>
         <div className="contact-header">
            <h2>Contact</h2>
         </div>
         <div className="content-contact">
            <div className="contact-left">
               <h4>Contact Info</h4>
               <div className="contact-icon-title">
                  <div><BsTelephoneFill /></div>
                  {/* <h5 className="text">Phone Number</h5> */}
                  <p className="text">650-283-0177</p>
               </div>
               <div className="contact-icon-title">
                  <div><MdEmail /></div>
                  {/* <h5 className="text">Email</h5> */}
                  <p className="text">tiluarora@yahoo.com</p>
               </div>
               <img src={home3} width="500"/>{' '}
           </div>
           <div className="form-contact">
               <h4>Send us a Message</h4>
              <p>Please send us an email, call/text, or submit an inquiry for more information and to begin discussing your project. We look forward to hearing from you.</p>
              <Form>
              <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="textarea" placeholder="Enter name" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="textarea" placeholder="Enter phone number" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
               </Form.Group>
               <Button variant="primary" type="submit">
                  Submit
               </Button>
            </Form>
           </div>
         </div>
      </Container>
   );
}
 
export default Contact;