import {
  Card,
  CardHeader,
  CardBody,
  Typography, Avatar, Button, Divide

} from "@material-tailwind/react";
import me from '../assets/me.jpg';
import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";


const Biosection = () => {


  return (

    <div className="flex flex-wrap justify-center items-center gap-8">
      <div className="md:w-1/2 text-center items-center justify-center ">
        <Avatar src={me} alt="Wayne Hoo" size="xxl" />
        <div>
          <Typography variant="h4" className="mb-2 text-[#cfd8dc] pt-5">
            Wayne Hoo Win Hong
            <br />
            <span className="text-base"><a href="mailto:gouzun@gmail.com">gouzun@gmail.com</a></span>
          </Typography>


          <br />
          <Typography variant="h6" textGradient className="text-[#cfd8dc]">
            Full Stack Developer/AI Prompt Engineer
          </Typography>
          <br />
          <Typography textGradient className="text-[#cfd8dc]">
            • ReactJs • NodeJs • Python • HTML • CSS • ChatGPT • Firebase • MongoDb • SQL
          </Typography>
        </div>
        <div className="pt-5">
          <Typography variant="h6" className="mb-2 text-[#cfd8dc] text-left">
            As a full-stack freelance developer based in Malaysia, I possess a diverse range of technical skills and knowledge in the field of information technology. With a solid foundation in web app development,it enables me to develop efficient and scalable web applications that meet the demands of clients.
            <br /><br />
            With experience in open AI technology and prompt engineering,  I have a deep understanding of the latest advancements in the tech industry. This knowledge, combined with my passion for innovation, allows me to create custom solutions that solve complex problems and drive business growth.
            <br /><br />
            I take pride in delivering high-quality work that meets the needs and expectations of my clients. With my attention to detail and dedication to excellence, I have established a reputation as a reliable and skilled developer in the industry. I am committed to staying up-to-date with the latest trends and best practices, ensuring that I can provide the most effective solutions to my clients.
          </Typography>
        </div>
        <div className="pt-5">
          <Typography variant="h6" className="mb-2 text-[#cfd8dc] text-left">
            I would be delighted to assist you with any inquiries or explore potential business opportunities with you. Please do not hesitate to contact us, as we value the opportunity to establish mutually beneficial partnerships.
            <br /><br />You can always reach me at <a href="mailto:gouzun@gmail.com">gouzun@gmail.com</a>.
          </Typography>
        </div>


      </div>
    </div>




  )
}

export default Biosection;