import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ywcfl4g', 'template_45fs22o', form.current, 'eOtldvc-lQUty8YaY')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <MdOutlineEmail className='contact_icon'/>
            <h4>
              Email
            </h4>
            <h5>athulkrishna080@gmail.com</h5>
            <a href="mailto:athulkrishna080@gmail.com" target='_blank' rel="noreferrer">Send a Message</a>
          </article>

          <article className="contact_option">
          <BsWhatsapp className='contact_icon'/>
            <h4>
              Whatsapp
            </h4>
            <h5>+919947107295</h5>
            <a href="https://api.whatsapp.com/send?phone=9947107295" target='_blank' rel="noreferrer">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message'rows="7" placeholder='Your Message' required/>
          <button type='submit'className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
