import React from 'react'
import icon from './images/ai.a5dfd92d2c5df23b1fe4.png'

import "./bodyImage.css"
import people from './images/people.png'


export default function BodyImage() {
  return (
    <div>
    <div className='description' id='description'>
    <div className='note'>
      <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1><br></br>
      <p>Yet bed any for travelling assistance indulgence unpleasing.
         Not thoughts all exercise blessing. Indulgence way everything 
         joy alteration boisterous the attachment. Party we years to order
          allow asked of.</p><br></br>
          <form className='fill'>
          <input type='text' className='form' placeholder='Your email address'/>
          <a href='#top' target="_blank" className='get-started' rel="noopener noreferrer">Get started</a>
          </form><br></br><br></br>
          <div className='patronage'>
          <div className='people'>
          <img src={people} alt='people'/>
          </div>
          <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
    </div>
    <img src={icon} id='AI' alt='my-ai'/>
    </div>
    </div>
  )
}
