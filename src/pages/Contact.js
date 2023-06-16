import React, { useState } from 'react'

import './Contact.css'

export default function Contact() {
  return (
    <div className='contact-container'>
      <h1>Contact</h1>
      <form name='contact' method='POST' data-netlify='true'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' />
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />
        <label htmlFor='message'>Message</label>
        <textarea id='message' name='message' />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}
