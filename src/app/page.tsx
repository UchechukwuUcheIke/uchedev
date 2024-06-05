import { Metadata } from 'next'
import portrait from "../images/portrait.jpg"

import {AppBar, Grid, Typography, Stack, Box, Paper, Card, CardHeader, CardMedia, CardContent, Button} from '@mui/material';

export const metadata: Metadata = {
  title: 'Uchedev',
}

export default function Home() {
  return (
    <Stack direction="column" spacing={0}  sx={{padding: "0", margin: "0", bgcolor: "#F5F3F3"}}>
      <Paper component="main" elevation={0} sx={{ p: 3,bgcolor: "#525c54", borderRadius: "0"}}>
      <Stack
      direction="row"
      justifyContent="center"
      alignItems="center" 
      spacing={2}
      >
        <Stack 
          direction="column" 
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ flexGrow: 1 }}>
          <Typography variant="h1" sx={{ color: "#EEEEEE", fontWeight: 'bold' }}>
            Hi, I'm Uche
          </Typography>
          <Typography variant="h2" sx={{ color: "#EEEEEE", fontWeight: 'bold' }}>
            And I'm a
          </Typography>
          <Typography variant="h2" sx={{ color: "#FFFFFF", fontWeight: 'bold' }}>
            Game <span style={{color:"#990000"}}>Developer</span>
          </Typography>
        </Stack>
        {/* Using Box with image component as a placeholder for MUI Image */}
        <Box
          component="img"
          sx={{
            background: "#FFFFFF",
            height: 500,
            width: 350,
            flexGrow: 1,
            borderRadius: '50%'
          }}
          alt="Portrait of Uche"
          src="/images/portrait.png"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button sx={{bgcolor: "#990000", color: "#FFFFFF"}} size="large">
          LinkedIn
        </Button>
        <Button sx={{bgcolor: "#990000", color: "#FFFFFF"}} size="large">
          Resume
        </Button>
      </Stack>
    </Paper>
    <Paper component="main" elevation={0} sx={{background: "#FFFFFF", borderRadius: "0"}}>
      <Box sx={{ marginBottom : 3,  p: 3, background: "#525c54"}}>
        <Typography variant="h4" sx={{fontWeight: 'bold'}}>About Me</Typography>
      </Box>

    </Paper>
    
  </Stack>
  );
}
/**
 * <Paper elevation={0} sx={{p: 2, background: "#525c54", borderRadius: "0"}}>
      <Grid container spacing={20}>
        <Grid xs={6}>
          <Typography variant="h4" sx={{fontWeight: 'bold'}}>Latest Projects</Typography>
        </Grid>
        <Grid  xs={6}>
          <Typography variant="h4" sx={{fontWeight: 'bold'}}>Latest Blogs</Typography>
        </Grid>
        <Grid  xs={6}>

          <Card elevation={5}>
            <CardHeader
              title="Maverick Hunter X"
              subheader="June 1st, 2024"
              sx={{}}
            />
            <CardMedia
              component="img"
              height="250"
              image="/images/MaverickHunterX.png"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                A 2.5D remake of the SNES classic Megaman X, with improved visuals, storytelling, and atmosphere.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid  xs={6}>
          <Card elevation={5}>
              <CardHeader
                title="From Megman X to Zero: Leveling Up and Falling Short"
                subheader="June 3rd, 2024"
              />
              <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
                </Typography>
              </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
 */