import { Fragment, useState, useEffect } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import Spline from '@splinetool/react-spline';
import smallgraphic from '../assets/smaller.png';

const Articles = () => {
    const [isSmScreen, setIsSmScreen] = useState(window.matchMedia('(max-width: 800px)').matches);
    useEffect(() => {
        const handleResize = () => {
            setIsSmScreen(window.matchMedia('(max-width: 800px)').matches);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (<>
        <div className="md:flex gap-8 text-[#cfd8dc] pt-10 justify-center items-center h-full md:h-96">
            <div className="w-full md:w-1/2 flex items-center justify-center ">
                {isSmScreen ? <Spline scene="https://prod.spline.design/r5AWLdvDUFhvNIXZ/scene.splinecode" />

                    : <Spline scene="https://prod.spline.design/nPz5tAMyImg5zVPK/scene.splinecode" />}</div>
            <div className="w-full md:w-1/2 items-center justify-center pt-28 px-10">
                <div className="text-5xl font-semibold">Empowering Ideas Through Technology</div><br /><br />
                <span className="text-xl font-semibold">As a full-stack developer who is deeply passionate about technology, I am committed to empowering and enabling individuals to turn their ideas into reality through the use of innovative technological solutions. From mobile apps to web applications, I strive to help others leverage technology to bring their ideas to life and make a positive impact in the world.
                </span>
            </div>
        </div>
    </>

    )
}

export default Articles