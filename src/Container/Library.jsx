import React from 'react'
import blog1 from "./images/blog01.b8c594107c0678715afa.png"
import blog2 from './images/blog02.4575fb47b66fd76940b0.png'
import blog3 from './images/blog03.beb41199f58f7cf27240.png'
import blog4 from './images/blog04.09c400fc78c96e4ff788.png'
import blog5 from './images/blog05.72041c450fbe88e59333.png'
import './Library.css'

export default function Library() {
  return (
    <div className='Library' id='library'>
        <h1 className='library_h1'>A lot is happening, We are blogging about it.</h1>
        <div className='library_contents'>
        <div className='blog1'>
          <img src={blog1} alt='blog1'/>
        <div>
        <p>Sep 26, 2021</p>

        <h1>GPT-3 and Open AI is the future. Let us exlore how it is?</h1>
        <p className='read'>Read Full Article</p>
        </div>

        </div>
        <div className='header_blog'>
        <div className='blogs'>
          <img src={blog2} alt='blog2'/>
        <div>
        <p>Sep 26, 2021</p>

        <h1>GPT-3 and Open AI is the future. Let us exlore how it is?</h1>
        <p className='read'>Read Full Article</p>
        </div>

        </div>
        <div className='blogs'>
          <img src={blog3} alt='blog3'/>
        <div>
          <p>Sep 26, 2021</p>

            <h1>GPT-3 and Open AI is the future. Let us exlore how it is?</h1>
            <p className='read'>Read Full Article</p></div>

        </div>
        </div>
        <div className='header_blog'>
        <div className='blogs'>
          <img src={blog4} alt='blog4'/>
        <div>
          <p>Sep 26, 2021</p>

          <h1>GPT-3 and Open AI is the future. Let us exlore how it is?</h1>
          <p className='read'>Read Full Article</p></div>

        </div>
        <div className='blogs'>
          <img src={blog5} alt='blog5'/>
        <div>
        <p>Sep 26, 2021</p>

        <h1>GPT-3 and Open AI is the future. Let us exlore how it is?</h1>
        <p className='read'>Read Full Article</p>
        </div>

        </div>
        </div>


        </div>
    </div>
  )
}
