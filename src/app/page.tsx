'use client';

//import { Metadata } from 'next'
import { useState, useEffect, useRef } from 'react'
import {Divider, Typography, Stack, Box, Paper,  Button, Card} from '@mui/material';
import ContentCard from '../Components/ContentCard'
import Link from "next/link";
import Image from 'next/image'
import Collapse from '@mui/material/Collapse';
import Grow from '@mui/material/Grow';
import Zoom from '@mui/material/Zoom';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileOpenIcon from '@mui/icons-material/FileOpen';

import Fade from '@mui/material/Fade';
import { profileEnd } from 'console';

/**
export const metadata: Metadata = {
  title: 'Uchedev',
}
   */

export default function Homepage() {
  const [blogsInView, setBlogsInView] = useState(false);
  const [projectsInView, setProjectsInView] = useState(false);
  // Ref used to track visibility of blogs
  const blogsRef = useRef();
  // Ref used to track visibility of projects
  const projectsRef = useRef();

  // I know this is bad, but idgaf atm
  const [checked, setChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);

  function playAnimation() {
    setChecked(true);
    setTimeout(() => {
      setSecondChecked(true);
    }, 2000);
  }

  useEffect(() => {
    playAnimation();

    //TODO: Reduce the amount of repeating code here
    //https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API would serve you well
    const blogsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBlogsInView(true);
          blogsObserver.disconnect();
        }
      }
      ,
      {
        threshold: 0.9, // Trigger when 10% of the element is visible
      }
    );

    const projectsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log(entry.target)
          setProjectsInView(true);
          blogsObserver.disconnect();
        }
      }
      ,
      {
        threshold: 0.9, // Trigger when 10% of the element is visible
      }
    );

    if (blogsRef.current) {
      blogsObserver.observe(blogsRef.current);
    }
    if (projectsRef.current) {
      projectsObserver.observe(projectsRef.current);
    }

    return () => {
      // Do something when component is unmounted
      blogsObserver.disconnect();
    };
  }, []);

  const basePath = process.env.BASE_PATH || "" // TODO: Consider getting rid of this;
  return (
    <Stack 
      direction="column"
      spacing={7}>
      <Paper 
        component="main" 
        elevation={0} 
        sx={{paddingX: 5, bgcolor: "#525c54"}}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          spacing={2}>
          <Stack 
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            sx={{ flexGrow: 1}}>
              <Fade in={checked}
              >
                <Typography 
                  variant='h2' 
                  component="span" 
                  display='inline'
                  sx={{color: "#EEEEEE", fontWeight: "bold"}}>
                  Hi, I&apos;m Uche 
                </Typography>
              </Fade>
              <Fade in={checked}
              style={{ transitionDelay: checked ? '1000ms' : '0ms' }}>
                <Typography 
                  variant='h2' 
                  component="span" 
                  display='inline'
                  sx={{color: "#EEEEEE", fontWeight: "bold"}}
                  >
                  and I&apos;m a
                </Typography>
              </Fade>
              <Collapse
                orientation="horizontal"
                component='span'
                in={secondChecked}
                {...(secondChecked ? { timeout: 1000 } : {})}>
                <Typography 
                  variant='h1' 
                  component="span" 
                  display='inline'
                  sx={{color: "#EEEEEE", fontWeight: "bold"}}>
                  {/*I'm using this weird ass symbol because the collapse splits the words otherwise*/}
                  Game&nbsp;<span style={{color: "#990000"}}>Developer</span>
                </Typography>
              </Collapse>

            <Stack 
              direction="row" 
              spacing={2} 
              sx={{flexGrow: 1, marginTop: 10, marginBottom: 2}}>
              <Button 
                size="large"
                color='secondary'
                LinkComponent={Link}
                variant="outlined"
                href='https://www.linkedin.com/in/uuche-ike/'
                startIcon={<LinkedInIcon />}
                sx={{bgcolor: "#525c54", color: "#FFFFFF"}}>
                LinkedIn
              </Button>
              <Button 
                size="large"
                color='secondary'
                variant="outlined"
                href='https://docs.google.com/document/d/1wY_XBHZSn8kD2WUSe5-UAW6Q5HE6MzSOwB38gggzZnI/edit?usp=sharing'
                startIcon={<FileOpenIcon />}
                sx={{bgcolor: "#525c54", color: "#FFFFFF"}} >
                Resume
              </Button>
            </Stack>
          </Stack>
          {/* Using Box with image component as a placeholder for MUI Image */}
          {/* Look into replacing the Box with Next.js' Image component */}
          <Box sx={{ position: 'relative', width: '500px', height: '500px', flexGrow: 0 }}>
            {/* */}
            <Box
              component="img"
              sx={{
                position: 'absolute',
                height: 500,
                width: 500,
                top: 0,
                left: 0,
                objectFit: 'cover',
                zIndex: 2,
              }}
              alt="Portrait of Uche"
              src={basePath + "/images/PortraitHeadshotOnly.png"}
            />
            <Fade
            in={secondChecked}>
            <Box
              component="img"
              sx={{
                position: 'absolute',
                height: 500,
                width: 500,
                top: 0,
                left: 0,
                objectFit: 'cover',
                zIndex: 1,
              }}
              alt="Portrait of Uche"
              src={basePath + "/images/PortraitFlameOnly.png"}
            />
            </Fade>
          </Box>
          
        </Stack>

      </Paper>
    <Paper 
      component="main" 
      elevation={0} 
      sx={{paddingX: 10}}>
        <Typography 
          variant="h3" 
          align="center" 
          sx={{fontWeight: 'bold'}}>
            About Me
        </Typography>
        <Typography 
          variant="body1" 
          align="center">
        Hi, my name is Uche. I am a software engineer, passionate about game design and game development. 
        I believe games are a powerful medium for conveying resonating experiences to players through well-crafted story,
         mechanics, and aesthetics. I love analyzing and creating games that transport users into different worlds.
        </Typography>
    </Paper>
    <Divider orientation="horizontal" variant="middle" flexItem />
    <Paper 
      component="main" 
      elevation={0} 
      sx={{borderRadius: "0", paddingX: 3}}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center">
        <Typography variant="h4" sx={{flexGrow: 1, marginBottom: 2, fontWeight: 'bold'}}>Latest Blogs</Typography>
        <Typography 
          variant="h5" 
          component={Link}
          href="/blogs"
          sx={{            
            fontWeight: 'bold',
            color: '#990000', 
            '&:visited': {
              color: '#990000'
            }
          }}>
            See All
        </Typography>
      </Stack>
      <Stack   
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}>

          <Zoom ref={blogsRef} in={blogsInView}>
            <ContentCard
              title="Maverick Hunter X Announcement"
              subheader="July 12th, 2024"
              imageURL={basePath + "/images/MHXAnnouncementThumbnail.png"}
              href="/blog/maverick-hunter-x"
              imageAlt={"MHX Announcement Thumbnail"}>
                Announcement of indie project Maverick Hunter X
            </ContentCard>
          </Zoom>

          <Zoom ref={blogsRef} in={blogsInView}>
            <ContentCard
              title="From Megman X to Zero: Leveling Up Yet Falling Short"
              subheader="June 10th, 2024"
              imageURL={basePath + "/images/MegamanXVsZero.png"}
              href="/blog/megaman-x-vs-zero"
              imageAlt={"From Megman X to Zero Thumbnail"}>
              Analysis of Megaman X and Megaman Zero games.
            </ContentCard>
          </Zoom>
      </Stack>
    </Paper>
    <Divider orientation="horizontal" variant="middle" flexItem />
    <Paper component="main" elevation={0} sx={{background: "inherit", borderRadius: "0", paddingX: 3}}>
    <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center">
        <Typography variant="h4" sx={{flexGrow: 1, marginBottom: 2, fontWeight: 'bold'}}>Latest Projects</Typography>
        <Typography 
          variant="h5"
          component={Link}
          href="/projects" 
          sx={{
            marginBottom: 2, 
            fontWeight: 'bold',
            color: '#990000', 
            '&:visited': {
              color: '#990000'
            },
          }}>
            See All
        </Typography>
    </Stack>
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}>
      <Zoom ref={projectsRef} in={projectsInView}>
        <ContentCard
            title="Maverick Hunter X"
            subheader="June 1st, 2024"
            imageURL={basePath + "/images/MaverickHunterX.png"}
            imageAlt={"Maverick Hunter X Logo"}
            href='/projects/maverick-hunter-x'>
              A 2.5D retelling of the Megaman X storyline with improved visuals, gameplay, and atmosphere.
        </ContentCard>
      </Zoom>
    </Stack>
    </Paper>
    
  </Stack>
  );
}
