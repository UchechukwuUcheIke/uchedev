import { Metadata } from 'next'
import "./page.css"
import {Button, Typography, Stack, Paper, Card, CardHeader, CardMedia, CardContent, CardActionArea} from '@mui/material';
import Link from "next/link";
import ContentCard from '../ContentCard';

export const metadata: Metadata = {
  title: 'Uchedev',
}


export default function Blogs() {
    const basePath = process.env.BASE_PATH
    return (
        <Paper component="main" sx={{padding: 2 }}>
            <Stack direction="column" spacing={2} >
                <Typography variant="h4">
                    Latest Blogs
                </Typography>
                {/**Using CSS grids cause MUI's grid suck */}
                <div className="grid-container">
                    <Card className="featured-item"
                        elevation={0}
                        component={Link}
                        href="/blog/megaman-x-vs-zero"
                        >
                        <CardActionArea>
                            <CardHeader
                                title="From Megman X to Zero: Leveling Up Yet Falling Short"
                                subheader="June 3rd, 2024"
                                />
                            <CardMedia
                                component="img"
                                height="194"
                                image={basePath + "/images/MegamanXvsZero.png"}
                                alt="Megaman X vs Zero thumbnail"
                                />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Analysis of Megaman X and Megaman Zero games
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </Stack>
        </Paper>
    )
}
/**
 *                      <Card>
                            <CardHeader
                                title="Maverick Hunter X"
                                subheader="June 1st, 2024"
                                />
                            <CardMedia
                                component="img"
                                height="194"
                                image="../images/portrait.jpg"
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
 */