import { Metadata } from 'next'

import {AppBar, Toolbar, Typography, Stack, Grid, Paper, Card, CardHeader, CardMedia, CardContent} from '@mui/material';

export const metadata: Metadata = {
  title: 'Uchedev',
}


export default function Blogs() {
    return (
        <Paper component="main" sx={{ p: 3 }}>
            <Stack direction="column" spacing={2}>
                <Typography variant="h3">
                    Featured Blogs
                </Typography>
                <Grid container spacing={2} columns={4}>
                    <Grid>
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
                    </Grid>
                </Grid>
            </Stack>
        </Paper>
    )
}