import { Fragment, useState, useEffect } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import me from '../assets/me.jpg';



const Articles = () => {
    const [open, setOpen] = useState(0);
    const [resList, setResList] = useState([]);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const Icon = ({ id, open }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${id === open ? "rotate-180" : ""
                    } h-5 w-5 transition-transform`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        );
    }
    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = async () => {

        try {
            const response = await fetch('http://localhost:5173/api/v1/articlelist', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const result = await response.json();

                setResList(result.data.reverse());
            }
        } catch (err) {
            alert(err);
        } finally {
        }
    };

    return (<>
        <Fragment >
            {resList.map((articleinfo, index) => {
                return (
                    <Accordion open={open === index} icon={<Icon id={index} open={open} />} key={index}>
                        <AccordionHeader onClick={() => handleOpen(index)} className="text-[#cfd8dc]">
                            <img src={me} className="h-40 w-40" alt="" />What is Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody className="text-[#cfd8dc]">
                            We&apos;re not always in the position that we want to be at.
                            We&apos;re constantly growing. We&apos;re constantly making mistakes.
                            We&apos;re constantly trying to express ourselves and actualize our
                            dreams.
                        </AccordionBody>
                    </Accordion>
                )
            })}
        </Fragment ></>

    )
}

export default Articles