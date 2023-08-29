import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import me from '../assets/me.jpg';
import { useState, useEffect } from 'react';
import Loader from '../utils/Loader';

const Projects = () => {

  const [resList, setResList] = useState([
    {
      pImg: 'https://res.cloudinary.com/drpsfwq3y/image/upload/v1685426058/portfolio/defect_ubheql.png',
      pAlt: 'Defect Inspection Web App',
      pTitle: 'Defect Inspection Web App',
      pDesc: 'A defect inspection web app is a software application designed to facilitate the inspection of products or systems for defects or issues. The app typically involves the use of a mobile device, such as a smartphone or tablet, that is equipped with a camera and a web-based interface for data input and analysis. The inspector uses the app to capture images of the product or system being inspected, and then records any defects or issues using a set of pre-defined criteria or checklists. ',
      pLink: 'https://inspectmy.netlify.app',
      skillset:'React Js ,Javascript ,Firebase ,Material Tailwind Css ,Tailwind Css ,HTML'
    },
    {
      pImg: 'https://res.cloudinary.com/drpsfwq3y/image/upload/v1683093002/portfolio/aisummarizer_wp23js.png',
      pAlt: 'AI Articles Summarizer',
      pTitle: 'AI Articles Summarizer Web App',
      pDesc: 'An AI articles summarizer web app is a software application that automatically generates a brief summary of a longer article or document. The app typically uses machine learning algorithms to analyze the text of the article and identify key themes, concepts, and ideas. It then condenses the information into a shorter, more digestible format that can be quickly read and understood.',
      pLink: 'https://hcaisummarizer.netlify.app',
      skillset:'React Js,Javascript ,CSS ,HTML ,OpenAi'
    },
    {
      pImg: 'https://res.cloudinary.com/drpsfwq3y/image/upload/v1683092739/portfolio/dalle_yhati1.png',
      pAlt: 'AI Art Generator',
      pTitle: 'AI Art Generator Web App',
      pDesc: 'An AI art generator web app is a software application that uses machine learning algorithms to generate unique and original art pieces. The app typically utilizes a neural network that has been trained on a large dataset of artworks, which allows it to learn and mimic various styles and techniques. The user can input specific parameters such as the desired art style, colors, and patterns, and the app will generate a custom art piece based on those inputs.',
      pLink: 'https://aiartgenerator.whtech.me',
      skillset:'React Js,Javascript ,Mongo Db ,CSS ,HTML ,OpenAi'
    },
    {
      pImg: 'https://res.cloudinary.com/drpsfwq3y/image/upload/v1685377525/portfolio/scheduler_aghigs.png',
      pAlt: 'Staff Scheduler',
      pTitle: 'Staff Scheduler Web App',
      pDesc: 'Introducing Scheduler, a cutting-edge staff scheduler arrangement tool designed to streamline and optimize workforce management for businesses of all sizes. With its intuitive interface and advanced features, Scheduler revolutionizes the way companies organize their staff schedules, ensuring optimal efficiency and productivity. Save time, reduce conflicts, and enhance employee satisfaction with Scheduler, your trusted partner in effective staff scheduling and resource allocation.',
      pLink: 'http://scheduler.whtech.me',
      skillset:'React Js,Javascript ,Mongo Db ,Material Tailwind Css ,Tailwind Css ,HTML'
    },
    {
      pImg: 'https://res.cloudinary.com/drpsfwq3y/image/upload/v1685977425/portfolio/rn_sbsxhf.png',
      pAlt: 'INSPECTMY(ANDROID VERSION)',
      pTitle: 'INSPECTMY(ANDROID VERSION)',
      pDesc: 'Introducing the Defect Inspection Tool for Android, a revolutionary solution that enables offline defect inspection. Combining advanced machine vision algorithms with the power of Android devices, this tool allows seamless capture, analysis, and identification of defects using the device camera. With its offline capability, inspectors can perform inspections without relying on network connectivity, making it ideal for remote areas or situations with limited internet access.',
      pLink: '',
      skillset:'React Native ,Native Base ,Javascript ,Mongo Db ,CSS ,Node Js'
    },
    {
      pImg: 'https://res.cloudinary.com/drpsfwq3y/image/upload/v1685978100/portfolio/INSPECTMY_REPORT_c0wvzg.png',
      pAlt: 'INSPECTMY REPORTING WEB APP',
      pTitle: 'INSPECTMY REPORTING WEB APP',
      pDesc: 'This is reporting tool for the Android Version INSPECTMY, a powerful web application that seamlessly generates comprehensive reports. This tool complements the Android version INSPECTMY by providing a user-friendly interface for users to view and analyze inspection data. Users can access the web app online and generate detailed reports in PDF format, making it convenient for sharing and archiving. ',
      pLink: 'https://inspectmyreport.whtech.me',
      skillset:'React Js ,Javascript ,Mongo Db ,Material Tailwind CSS ,Node Js'
    },
      {
        pImg: 'https://res.cloudinary.com/drpsfwq3y/image/upload/v1683093307/portfolio/hc_ne2kbi.png',
        pAlt: 'Hoo Construction Sdn Bhd',
        pTitle: 'Company Landing Page',
        pDesc: 'The function of a company landing page is to provide visitors with a brief overview of the company, its products or services, and its mission and values. It serves as the first point of contact between the company and potential customers or clients, and should be designed to make a positive first impression. A well-designed landing page should be visually appealing, easy to navigate, and provide visitors with the information they need to make informed decisions about whether to engage with the company further.',
        pLink: 'https://hooconstruction.netlify.app',
        skillset:'Bootstrap Css, HTML'
      },      
  ]);
   

  return (<>
    <div className="flex flex-wrap justify-center items-center  gap-20 pt-10">
      {resList.map((projectinfo, index) => {
        return (
          <Card className="w-96" key={index}>
            <CardHeader color="blue" className="relative h-64 md:h-72 ">
              <img
                src={projectinfo.pImg}
                alt={projectinfo.pAlt}
                className=""
              />
            </CardHeader>
            <CardBody className="text-center mb-2 h-96 ">
              <Typography variant="h5">
                {projectinfo.pTitle}
              </Typography>
              <Typography>
                <a href={projectinfo.pLink} target="_blank">{projectinfo.pLink}</a>
              </Typography>
              <br />
              <Typography className="text-sm">
                {projectinfo.skillset}
              </Typography>
              <br />
              <Typography className="text-sm">
                {projectinfo.pDesc}
              </Typography>
            </CardBody>
          </Card>)
      }) }
    </div>

  </>)
}

export default Projects