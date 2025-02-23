import React from 'react'
import './Contact.css'
// import { FaEnvelope ,FaLocationDot, FaPhone} from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="contact" id='contact'>
        <div className="contact_header">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact_info">
        <div className="contact_left">
            <h2>Lets Talk Business</h2>
            <p>Feel free to reach out to me for any inquiries or collaboration. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
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
        <div className="contact_input">
          <div className="text">
            <input type="text" placeholder='Email' />
          </div>
          <div className="text">
            <input type="text" placeholder='Subject' />
          </div>
          <div className="message">
            <textarea name="Message"  cols="30" rows="10">Message</textarea>
          </div>
          <div className="btn">
            <button>Send Message</button>
          </div>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Contact