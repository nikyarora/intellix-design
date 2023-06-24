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
             <Route path="/intellix-design" element={<Home/>} exact/>
             <Route path="/intellix-design/about" element={<About/>}/>
             <Route path="/intellix-design/contact" element={<Contact/>}/>
             <Route path="/intellix-design/projects" element={<Projects/>}/>
            <Route component={Error}/>
           </Routes>
        </main> 
      </BrowserRouter>
    );
  }
}
 
export default App;