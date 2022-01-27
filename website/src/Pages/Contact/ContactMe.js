import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';





const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_i5q6o8e', 'template_m4lsllr', form.current, 'user_RZjgKD6LUoGgz9KCLbdnG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    
  return <div>

<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="fullName" />
      <label>Email</label>
      <input type="email" name="emailAddress" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>



  </div>;
};

export default ContactMe;
