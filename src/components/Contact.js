import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import './Contact.css';
import home3 from "../images/home3.jpeg";
import emailjs from 'emailjs-com';

const Contact = () => {
   emailjs.init('user_z9pGQ8TilHkpIf4r8lo4s');
   const [name, setName] = React.useState('');
   const [email, setEmail] = React.useState('');
   const [phone, setPhone] = React.useState('');
   const [message, setMessage] = React.useState('');

   const templateParams = {
      from_name: name,
      email: email,
      phone: phone,
      message: message
  };

   const handleSubmit = (e) => {
      e.preventDefault(); // Prevents default refresh by the browser
      if(name == '' || email == '' || message == '') {
         alert("Please fill out all the required fields");
      } else {
         emailjs.send(`service_intellix`, 'template_intellix', templateParams)
         .then((result) => {
            alert("Message Sent, We will get back to you shortly", result.text);
         },
         (error) => {
            alert("An error occurred, Please try again", error.text);
         });

         setName("");
         setEmail("");
         setPhone("");
         setMessage("");
      }
   };

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
                  <p className="text">650-283-0177</p>
               </div>
               <div className="contact-icon-title">
                  <div><MdEmail /></div>
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
                  <Form.Control 
                     type="textarea" 
                     placeholder="Enter Name"
                     value={name}
                     onChange={e => setName(e.target.value)}
                  />
               </Form.Group>
               <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control 
                     type="email" 
                     placeholder="Enter Email"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                  />
               </Form.Group>
               <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control 
                     type="phone" 
                     placeholder="Enter Phone"
                     value={phone}
                     onChange={e => setPhone(e.target.value)}
                  />
               </Form.Group>
               <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                     as="textarea" 
                     rows={3}
                     value={message}
                     onChange={e => setMessage(e.target.value)} 
                  />
               </Form.Group>
               <Button variant="primary" type="submit" onClick={handleSubmit.bind(this)}>
                  Submit
               </Button>
            </Form>
           </div>
         </div>
      </Container>
   );

}
 
export default Contact;