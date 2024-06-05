import { Metadata } from 'next'
import portrait from "../images/portrait.jpg"

import {AppBar, Toolbar, Typography, Stack, Box, Paper, Card, CardHeader, CardMedia, CardContent, Button} from '@mui/material';

export const metadata: Metadata = {
  title: 'Uchedev',
}

export default function Home() {
  return (
    <Stack direction="column" spacing={2} sx={{bgcolor: "#F5F3F3"}}>
      <Paper component="main" elevation={0} sx={{ p: 3, bgcolor: "#525c54"}}>
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
            Game Developer
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
      <Stack>
        <Button>
          Linked In
        </Button>
        <Button>
          Resume
        </Button>
      </Stack>
    </Paper>
    <Paper component="main" elevation={0} sx={{background: "#525c54"}}>
      <Box sx={{ marginBottom : 3,  p: 3}}>
        <Typography variant="h4" sx={{fontWeight: 'bold'}}>About Me</Typography>
      </Box>

    </Paper>
    <Paper component="main" elevation={0} sx={{background: "#525c54"}}>
      <Stack>
      <Box sx={{ marginBottom : 3, p: 3}}>
        <Typography variant="h4" sx={{fontWeight: 'bold'}}>Latest Projects</Typography>
      </Box>
      <Stack
        direction="row"
        justifyContent="flex-start"
        spacing={2}
        sx={{p: 3}}>
          {/* Placing dummy projects in for now */}
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
      </Stack>
      </Stack>
    </Paper>

    <Paper component="main"  sx={{background: "#525c54"}}>
      <Box sx={{ marginBottom : 3, p: 3}}>
        <Typography variant="h4" sx={{fontWeight: 'bold'}}>Latest Blogs</Typography>
      </Box>
      <Stack
        direction="row"
        justifyContent="flex-start"
        spacing={2}
        sx={{p: 3}}>
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
      </Stack>
    </Paper>
  </Stack>
  );
}
