import React from 'react';
import './App.css'
import Header from "./Container/Header.jsx"
import BodyImage from './Container/body-image.jsx';
import Partners from "./Container/partners.jsx"
import Chatdes from './Container/chatdes.jsx';
import Chatdes1 from './Container/chatdes1.jsx'
import Chatdes2 from './Container/chatdes2.jsx'
import Get from './Container/Get-started.jsx'
import Library from './Container/Library.jsx';
import Footer from './Container/footer.jsx'


function App() {
  return (
    <div>
    <div className='nav-hero'>
      <Header/>
      <BodyImage/>
      </div>
      <div className = "component">
      <Partners/>
      <Chatdes/>
      <Chatdes1/>
      <Chatdes2/>
      <Get/>
      <Library/>
      </div>
      <div>
      <Footer/>
      
      </div>
    
    </div>
  );
}

export default App;
