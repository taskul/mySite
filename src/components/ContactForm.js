import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css"

export default function ContactUs () {
  const [emailSent, setEmailSent] = useState(false); 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let formData =  form.current.elements

    emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID, 
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
            setEmailSent(true);
          formData.from_name.value = "";
          formData.user_email.value = "";
          formData.message.value = "";
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-form-container'>
        <div className="carousel-text-light"></div>
            <p className="typewriter-text" >
                <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
                {emailSent && <p className='typewriter-message'>Your message has been sent. Have a wonderful day.</p>}
                </form>
            </p>
    </div>
  );
};