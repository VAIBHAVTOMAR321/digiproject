import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1f58ncl', 'template_tjyhe1a', form.current, 'r-R6eTVigPSxeTUPY')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
      });
  };

  return (
    <>
      <div className="contact" id='contact'>
        <div className="contact_header">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact_info">
          <div className="contact_left">
            <h2>Lets Talk Business</h2>
            <p>Feel free to reach out to me for any inquiries or collaboration. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div className="contact_details">
              <div className="detail">
                {/* <FaEnvelope /> */}
                <p>webwandersolutions</p>
              </div>
              <div className="detail">
                {/* <FaPhone /> */}
                <p>+91 8766219989</p>
              </div>
              <div className="detail">
                {/* <FaLocationDot /> */}
                <p>Chakrata Road , Chukkuwala , Dehradun</p>
              </div>
            </div>
          </div>
          <div className="contact_right">
            <form ref={form} onSubmit={sendEmail} className="contact_input">
              <div className="text">
                <input type="text" name="user_email" placeholder='Email' required />
              </div>
              <div className="text">
                <input type="text" name="subject" placeholder='Subject' required />
              </div>
              <div className="message">
                <textarea name="message" cols="30" rows="10" placeholder='Message' required></textarea>
              </div>
              <div className="btn">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;