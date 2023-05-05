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
  // const [projectinfo, setProjectinfo] = useState({
  //   pImg: '',
  //   pAlt: '',
  //   pTitle: '',
  //   pDesc: '',
  //   pLink: '',
  // });

  const [resList, setResList] = useState([]);
  const [isLoading, setIsLoading] = useState('');
  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = async () => {

    try {
      setIsLoading(false);
      let responseClone;
      const response = await fetch('https://portfolio-8q1p.onrender.com/api/v1/projectlist', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',

        },
        // }).then(function (response) {
        //   responseClone = response.clone(); // 2
        //   return response.json();
        // })
        //   .then(function (data) {
        //     // Do something with data
        //   }, function (rejectionReason) { // 3
        //     console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
        //     responseClone.text() // 5
        //       .then(function (bodyText) {
        //         console.log('Received the following instead of valid JSON:', bodyText); // 6
        //       });
      });



      if (response.ok) {
        const result = await response.json();
        setResList(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(true);
    }
  };

  return (<>
    <div className="flex flex-wrap justify-center items-center  gap-20 pt-10">
      {isLoading ? resList.map((projectinfo, index) => {
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
      }) : <Loader />}
    </div>

  </>)
}

export default Projects