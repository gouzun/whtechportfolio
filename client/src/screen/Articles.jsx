import { Fragment, useState, useEffect } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import me from '../assets/me.jpg';
import Spline from '@splinetool/react-spline';


const Articles = () => {
   
       

    return (<>
        <div className="md:flex gap-8 text-[#cfd8dc] pt-10 justify-center items-center h-96">
            <div className="w-full md:w-1/2 flex items-center justify-center"><Spline scene="https://prod.spline.design/nPz5tAMyImg5zVPK/scene.splinecode" /></div>
            <div className="w-full md:w-1/2 items-center justify-center pt-28 px-10">
            <div className="text-5xl font-semibold">Empowering Ideas Through Technology</div><br/><br/>
            <span className="text-xl font-semibold">As a full-stack developer who is deeply passionate about technology, I am committed to empowering and enabling individuals to turn their ideas into reality through the use of innovative technological solutions. From mobile apps to web applications, I strive to help others leverage technology to bring their ideas to life and make a positive impact in the world.
            </span>
            </div>
            </div>
    </>

    )
}

export default Articles