import React, { useState } from 'react'
import Landing from '../../components/contact/Landing'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const responseBody = {
    name:"",
    email:"",
    message:""
  }

  const inputChangehandler = (setFunction, event)=>{
    setFunction(event.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    responseBody.name = name;
    responseBody.email = email;
    responseBody.message = message;
    setEmail("");
    setName("");
    setMessage("");
    console.log(responseBody);
    //integrate emailjs here
  }
  return (
    <div className="bg-black min-h-screen">
      <Landing />
      <div className="flex flex-col lg:flex-row w-[80vw] mx-auto justify-center items-center p-4">
        <div className="my-10">
          <h5 className="text-sm m-auto text-[#3786ff] my-2 tracking-wider">
            CONTACT WITH US
          </h5>
          <h2 className="text-4xl sm:text-5xl m-auto text-white font-bold my-2 tracking-wider">
            WE ARE HERE TO HELP YOU
          </h2>
          <p className="text-[#848484] text-sm mb-10 lg:w-3/4">
            A coding environment is a vital tool for developers, providing a
            digital workspace where they write, test, and debug their code. It
            typically includes a code editor
          </p>
          <hr className="text-[#848484] my-5 w-3/4" />
          <div className="text-[#848484] ml-4 text-2xl flex space-x-4">
            <a
              href="https://www.linkedin.com/company/tech-society-iiitbh/"
              className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              href="https://www.instagram.com/techsociiitbh/"
              className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              href="mailto:tech-society@iiit-bh.ac.in"
              className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <ion-icon name="mail"></ion-icon>
            </a>
          </div>
        </div>
        <div className="flex p-5">
          <form onSubmit={handleSubmit}>
            <input
              className="bg-[#1B1A1A] h-14 w-[88%] md:w-2/5 m-5 p-3 text-white"
              value={name}
              onChange={(e) => inputChangehandler(setName, e)}
              placeholder="Full Name"
            />
            <input
              className="bg-[#1B1A1A] h-14 w-[88%] md:w-2/5 m-5 p-3 text-white"
              value={email}
              onChange={(e) => inputChangehandler(setEmail, e)}
              placeholder="Email address"
            />
            <textarea
              className="bg-[#1B1A1A] h-48 w-[88%] m-5 p-3 text-white"
              value={message}
              onChange={(e) => inputChangehandler(setMessage, e)}
              placeholder="Enter your message"
            />
            <button
              type="submit"
              className="bg-[#3786FF] text-xs m-5 px-8 py-4 text-white duration-300 hover:scale-110"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <div className='my-10'>
        <iframe
          title='College address'
          className='mx-auto w-[80vw] h-[60vh]'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1332146669993!2d85.74082137507847!3d20.29475241258431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907923fc9c557%3A0xd3b0b05336a9dfaa!2sInternational%20Institute%20of%20Information%20Technology%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1695546755837!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact