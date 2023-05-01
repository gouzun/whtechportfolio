import {
    Card,
    CardHeader,
    CardBody,   
    Typography,
  } from "@material-tailwind/react";
  import me from '../assets/me.jpg';

const Biosection = () => {

  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
    <Card className="w-96 bg-[#1e88e5] shrink-0">
      <CardHeader floated={false} className="h-100 ">
        <img src={me} alt="profile-picture"  />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" className="mb-2 text-[#b3e5fc]">
          Wayne Hoo Win Hong
        </Typography>
        <Typography variant="h6" textGradient className="text-[#b3e5fc]">
         Full Stack Developer/AI Prompt Engineer
        </Typography>
        <Typography textGradient className="text-[#b3e5fc]">
        • ReactJs • NodeJs • Python • Web App • HTML • CSS • ChatGPT • Firebase • MongoDb • SQL
        </Typography>
      </CardBody>
      
    </Card>
    <Card className="w-96 bg-[#1e88e5] shrink-0">
      
      <CardBody className="text-left">
        <Typography variant="h6" className="mb-2 text-[#b3e5fc]">
        As a full-stack freelance developer based in Malaysia, I possess a diverse range of technical skills and knowledge in the field of information technology. With a solid foundation in web app development,it enables me to develop efficient and scalable web applications that meet the demands of clients.

With experience in open AI technology, prompt engineering, and MongoDB, I have a deep understanding of the latest advancements in the tech industry. This knowledge, combined with my passion for innovation, allows me to create custom solutions that solve complex problems and drive business growth.

I take pride in delivering high-quality work that meets the needs and expectations of my clients. With my attention to detail and dedication to excellence, I have established a reputation as a reliable and skilled developer in the industry. I am committed to staying up-to-date with the latest trends and best practices, ensuring that I can provide the most effective solutions to my clients.
        </Typography>
        
      </CardBody>
      
    </Card>
    </div>
 
  )
}

export default Biosection;