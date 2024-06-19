'use client';

//import { Metadata } from 'next'
import { useState, useEffect } from 'react'
import {Divider, Typography, Stack, Box, Paper,  Button} from '@mui/material';
import ContentCard from '../Components/ContentCard'
import Link from "next/link";
import Typewriter from '@/Components/Typewriter';
import JobTitle from '@/Components/JobTitle';
import Image from 'next/image'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileOpenIcon from '@mui/icons-material/FileOpen';

import Fade from '@mui/material/Fade';

/**
export const metadata: Metadata = {
  title: 'Uchedev',
}
   */

export default function Homepage() {
  const [checked, setChecked] = useState(false);

  function playAnimation() {
    setChecked(true);
  }

  useEffect(() => {
    playAnimation();
    return () => {
      // Do something when component is unmounted
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
            justifyContent="flex-end"
            alignItems="flex-start"
            sx={{ flexGrow: 1}}>
              <Typewriter
                variant='h3'
                delay={100}
                textColor={"#EEEEEE"}
                infinite={false}>
                Hi, I&apos;m Uche</Typewriter>
              <Typewriter
                variant='h3'
                delay={100}
                textColor={"#EEEEEE"}
                infinite={false}>
                and I&apos;m a</Typewriter>
              <JobTitle
                variant='h2'
                delay={100}
                textColor={"#EEEEEE"}
                infinite={false}>
                Game
              </JobTitle>
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
                href='https://docs.google.com/document/d/1FPh5hAwIeWYqUvfYuOX1LDHpppEgie1vvl2xVBitVac/edit?usp=sharing'
                startIcon={<FileOpenIcon />}
                sx={{bgcolor: "#525c54", color: "#FFFFFF"}} >
                Resume
              </Button>
            </Stack>
          </Stack>
          {/* Using Box with image component as a placeholder for MUI Image */}
          {/* Look into replacing the Box with Next.js' Image component */}
          <Box
            component="img"
            sx={{
              height: 500,
              width: 300,
              flexGrow: 1,
            }}
            alt="Portrait of Uche"
            src={basePath + "/images/portrait.png"}
          />
          
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
        alignItems="center">
        <ContentCard
          title="From Megman X to Zero: Leveling Up Yet Falling Short"
          subheader="June 10th, 2024"
          imageURL={basePath + "/images/MegamanXVsZero.png"}
          href="/blog/megaman-x-vs-zero"
          imageAlt={"From Megman X to Zero Thumbnail"}>
            Analysis of Megaman X and Megaman Zero games
        </ContentCard>
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
      <ContentCard
          title="Maverick Hunter X"
          subheader="June 1st, 2024"
          imageURL={basePath + "/images/MaverickHunterX.png"}
          imageAlt={"Maverick Hunter X Logo"}
          href='/projects/maverick-hunter-x'>
            A 2.5D retelling of the Megaman X storyline with improved visuals, gameplay, and atmosphere.
      </ContentCard>
    </Stack>
    </Paper>
    
  </Stack>
  );
}
