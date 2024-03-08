import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { RiMailSendLine } from "react-icons/ri";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm('service_xazc898', 'template_ites53y', form.current, {
        publicKey: 'wWW1wFlYvVbtpQVBp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <div id="contact" className='contactformcontainer'>
  
    <div className='contactform'>
    <div className='contacttitlecontainer'>
        <div className='contacttitle'><h1>Contact Me</h1></div>
        </div>
    <form ref={form} onSubmit={sendEmail}>
    <div></div>
      {/* <div className='contactlabel'>
      <label>Name</label> */}
      {/* </div> */}
      <div className='contactinput'>
      <label>Name</label>
      <input type="text" name="user_name" />
      </div>
      {/* <div className='contactlabel'>

      <label>Email</label>
      </div> */}
      <div className='contactinput'>
      <label>Email</label>
      <input type="email" name="user_email" />
      </div>
      {/* <div className='contactlabel'>
      <label>Message</label>
      </div> */}
      <div className='contactinput'>
      <label>Message</label>
      <textarea rows="7" name="message" />
      </div>
      <div className='contactbtn'>
      <button type="submit" value='send'>SEND <RiMailSendLine/> </button>
      </div>
    </form>
    </div>
    </div>
  );
};