import React from 'react'
import logo from './images/Screenshot 2024-08-17 124043.png'
import "./Header.css";


export default function Header() {
  return (
    <div><nav className="App">
    <div className='nav-links'>
    <img src={logo} alt='only u'/>
    <ul>
      <li><a href='#description'>Home</a></li>
      <li><a href='#chatdes'>What is GPT?</a></li>
      <li><a href='#chatdes1'>Open AI</a></li>
      <li><a href='#chatdes2'>Case Studies</a></li>
      <li><a href='#library'>Library</a></li>
    </ul>
    </div>
    
      <ul className='sign'>
      <li><a href='#top' target="_blank" className='sign-in' rel="noopener noreferrer">Sign in</a></li>
      <li><a href='#top' target="_blank" className='sign-up' rel="noopener noreferrer">Sign up</a></li>
      </ul>
      
    <div className='responsive'>
    <div className='bar1'></div>
    <div className='bar2'></div>
    <div className='bar3'></div>
    </div>
    </nav></div>
  )
}
