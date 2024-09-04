import React from 'react'
import './partner.css'
import google from "./images/google.png"
import slack from "./images/slack.png"
import atlassian from './images/atlassian.b300970d4dad69eef066.png'
import dropbox from './images/dropbox.74056b966ce8bd5829b6.png'
import shopify from './images/shopify.png'


export default function Partners() {
  return (
    <div className='partners'>
        <img src={google} alt='google'/>
        <img src={slack} alt='slack'/>
        <img src={atlassian} alt='atlassian'/>
        <img src={dropbox} alt='dropbox'/>
        <img src={shopify} alt='shopify'/>
    </div>
  )
}
