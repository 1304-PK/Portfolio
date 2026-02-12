import React, { useState } from 'react';
import '../styles/ContactCard.css';

const ContactCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div 
      className="contact-card-container" 
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`contact-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
  
        <div className="contact-card-face contact-card-front">
          <h2>Contact Me</h2>
        </div>
        <div className="contact-card-face contact-card-back">
            <h1 className='form-header'>Contact Me</h1>
          <form action="" className='contact-form' onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="text">Name</label>
                <input type="text" name='name' id='name'/>
            </div>
            <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email'/>
            </div>
            <div className="form-field">
                <label htmlFor="message">Message</label>
                <input type="text" name='message' id='message' />
            </div>
            <button type='submit' className='submit-btn'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;