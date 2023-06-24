import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects'
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <main>
          <Navigation />
            <Routes>
             <Route path="/" element={<Home/>} exact/>
             <Route path="/about" element={<About/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/projects" element={<Projects/>}/>
            <Route component={Error}/>
           </Routes>
        </main> 
      </BrowserRouter>
    );
  }
}
 
export default App;