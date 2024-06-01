import { Metadata } from 'next'

import {AppBar, Toolbar, Typography, Stack, Box, Paper} from '@mui/material';

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
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            flexGrow: 2
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
      </Stack>
    </Paper>
    <Paper component="main" sx={{ p: 3 }}>
      <Typography>Projects</Typography>
    </Paper>
    <Paper component="main" sx={{ p: 3 }}>
      <Typography>Blogs</Typography>
    </Paper>
  </Stack>
  );
}
