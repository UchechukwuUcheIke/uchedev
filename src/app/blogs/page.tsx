import { Metadata } from 'next'
import "./page.css"
import {Button, Typography, Stack, Paper, Card, CardHeader, CardMedia, CardContent, CardActionArea} from '@mui/material';
import Link from "next/link";
import ContentCard from '@/ContentCard';

export const metadata: Metadata = {
  title: 'Uchedev',
}


export default function Blogs() {
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
                        href="/blogs/megaman-x-vs-zero"
                        >
                        <CardActionArea>
                            <CardHeader
                                title="From Megman X to Zero: Leveling Up and Falling Short"
                                subheader="June 3rd, 2024"
                                />
                            <CardMedia
                                component="img"
                                height="194"
                                image="../images/portrait.jpg"
                                alt="Paella dish"
                                />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <ContentCard
                        title="Maverick Hunter X"
                        subheader="June 1st, 2024"
                        imageURL={"/images/MaverickHunterX.png"}
                        imageAlt={"Maverick Hunter X Logo"}>
                            A 2.5D retelling of the Megaman X storyline with improved visuals, gameplay, and atmosphere.
                    </ContentCard>

                    <ContentCard
                        title="Maverick Hunter X"
                        subheader="June 1st, 2024"
                        imageURL={"/images/MaverickHunterX.png"}
                        imageAlt={"Maverick Hunter X Logo"}>
                            A 2.5D retelling of the Megaman X storyline with improved visuals, gameplay, and atmosphere.
                    </ContentCard>
                    <ContentCard
                        title="Maverick Hunter X"
                        subheader="June 1st, 2024"
                        imageURL={"/images/MaverickHunterX.png"}
                        imageAlt={"Maverick Hunter X Logo"}>
                            A 2.5D retelling of the Megaman X storyline with improved visuals, gameplay, and atmosphere.
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