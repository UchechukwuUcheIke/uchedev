import { Metadata } from 'next'
import {Divider, Typography, Stack, Box, Paper, Card, CardHeader, CardMedia, CardContent, CardActionArea, Button} from '@mui/material';
import ContentCard from '@/ContentCard';
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Uchedev',
}

export default function Homepage() {
  // accessing the basepath through env variable so images appear when website is deployed
  const basePath = process.env.BASE_PATH
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
            <Typography 
              variant="h1" 
              sx={{ color: "#EEEEEE", fontWeight: "bold" }}>
              Hi, I&apos;m Uche
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ color: "#EEEEEE", fontWeight: "bold" }}>
              and I&apos;m a
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
              Game <span style={{color: "#990000"}}>Developer</span>
            </Typography>
            <Stack 
              direction="row" 
              spacing={2} 
              sx={{flexGrow: 1, marginTop: 10, marginBottom: 2}}>
              <Button 
                size="large"
                sx={{bgcolor: "#990000", color: "#FFFFFF"}}>
                LinkedIn
              </Button>
              <Button 
                size="large"
                sx={{bgcolor: "#990000", color: "#FFFFFF"}} >
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
            src={`/uchedev/images/portrait.png`}
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
        <Typography variant="h5" sx={{marginBottom: 2, fontWeight: 'bold', color: "#990000"}}>See All</Typography>
      </Stack>
      <Stack   
        direction="row"
        justifyContent="flex-start"
        alignItems="center">
        <ContentCard
          title="From Megman X to Zero: Leveling Up and Falling Short"
          subheader="June 3rd, 2024"
          imageURL={basePath + "/images/MaverickHunterX.png"}
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
        <Typography variant="h5" sx={{marginBottom: 2, fontWeight: 'bold', color: "#990000"}}>See All</Typography>
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
          imageAlt={"Maverick Hunter X Logo"}>
            A 2.5D retelling of the Megaman X storyline with improved visuals, gameplay, and atmosphere.
      </ContentCard>
    </Stack>
    </Paper>
    
  </Stack>
  );
}
