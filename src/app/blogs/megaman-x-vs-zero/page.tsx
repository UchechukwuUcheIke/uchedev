import { Metadata } from 'next'
import {Divider, Typography, Stack, Box, Paper, Card, CardHeader, CardMedia, CardContent, Button} from '@mui/material';
export const metadata: Metadata = {
  title: 'Uchedev',
}

export default function Megaman_x_vs_zero() {
  return (
    <Paper component="main" sx={{padding: 2 }}>
        <Stack 
          direction="column" 
          spacing={2}
           >
            <Typography variant="h4">
                Megaman X vs Zero
            </Typography>
            {/** TODO: Look into react-markdown and mui-markdown for getting article contents into page */}
        </Stack>
    </Paper>
);
}