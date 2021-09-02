import './contact.scss'
import { useState } from 'react';
import shake from "../../img/shake.svg";
import emailjs from "emailjs-com"


export default function Contact() {


    

    const[message, setMessage]= useState(false);

    const sendEmail = (e)=>{
    
    e.preventDefault();

    emailjs.sendForm('service_6q0u9l6', 'template_lnul15j', e.target, 'user_6vJZmgwNGuVcT3qvRUbt9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    setMessage(true)
}

    return (
        <div className ="contact" id="contact">
            <div className="left">
            <img src={shake} alt="" />
            </div>
            <div className="right">
            <h2>Contact Me</h2>


            <form onSubmit ={sendEmail}>
        <input type="text" placeholder="Name" name="name"/>
        <input type="text" placeholder="Email" name="email"/>
        <input type="text" placeholder="Subject" name="subject"/>
        <textarea placeholder="Message" name="message"></textarea>
        <button type="submit">Send</button>
        {message && <span>Thank you, I will get back to you soon.</span> }
            </form>
            </div>
        </div>
    )
}
