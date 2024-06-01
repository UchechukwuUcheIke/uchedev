import { Metadata } from 'next'

import {AppBar, Toolbar, Typography, Stack, Box, Paper, Card, CardHeader, CardMedia, CardContent} from '@mui/material';

export const metadata: Metadata = {
  title: 'Uchedev',
}

export default function Home() {
  return (
    <Stack direction="column" spacing={2}>
      <Paper component="main" sx={{ p: 3 }}>
      <Stack
      direction="row"
      justifyContent="center"
      alignItems="center" 
      spacing={5}>
        <Stack direction="column" sx={{ flexGrow: 1 }}>
        <Typography variant="h2">
          Software Engineer
        </Typography>
        <Typography variant="h2">
          Game Designer
        </Typography>
        <Typography variant="h2">
          Game Developer
        </Typography>
        </Stack>
        {/* Using Box with image component as a placeholder for MUI Image */}
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            flexGrow: 2,
            borderRadius: '50%'
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
      </Stack>
    </Paper>
    <Paper component="main" sx={{ p: 3 }}>
      <Typography variant="h4">Latest Projects</Typography>
      <Stack
        direction="row"
        justifyContent="flex-start"
        spacing={2}>
          {/* Placing dummy projects in for now */}
          <Card>
            <CardHeader
              title="Maverick Hunter X"
              subheader="June 1st, 2024"
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
    <Paper component="main" sx={{ p: 3 }}>
      <Typography variant="h4">Latest Blogs</Typography>
      <Stack
        direction="row"
        justifyContent="flex-start"
        spacing={2}>
        <Card>
              <CardHeader
                title="Megman X vs Zero"
                subheader="September 14, 2016"
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
