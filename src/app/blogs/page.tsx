import { Metadata } from 'next'
import "./page.css"
import {Button, Typography, Stack, Paper, Card, CardHeader, CardMedia, CardContent, CardActionArea} from '@mui/material';
import Link from "next/link";
import ContentCard from '../../Components/ContentCard';

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
                    <ContentCard
                        className = "featured-item"
                        title="From Megman X to Zero: Leveling Up Yet Falling Short"
                        subheader="June 10th, 2024"
                        imageURL={basePath + "/images/MegamanXVsZero.png"}
                        href="/blog/megaman-x-vs-zero"
                        imageAlt={"From Megman X to Zero Thumbnail"}>
                            Analysis of Megaman X and Megaman Zero games
                    </ContentCard>
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