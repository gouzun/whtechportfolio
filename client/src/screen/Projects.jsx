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

const Projects = () => {
  // const [projectinfo, setProjectinfo] = useState({
  //   pImg: '',
  //   pAlt: '',
  //   pTitle: '',
  //   pDesc: '',
  //   pLink: '',
  // });

  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = async () => {

    try {
      const response = await fetch('http://localhost:5173/api/v1/projectlist', {
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
    <div className="flex flex-wrap justify-center items-center  gap-20 pt-10">
      {resList.map((projectinfo, index) => {
        return (
          <Card className="w-96" key={index}>
            <CardHeader color="blue" className="relative h-72 ">
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
                {projectinfo.pDesc}
              </Typography>
            </CardBody>
          </Card>)
      })}
    </div>

  </>)
}

export default Projects