import { Metadata } from 'next'
import "./page.css"
import {Typography, Stack, Paper} from '@mui/material';
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
                        {/*TODO: Add a thumbnail to this blog story */}
                        <ContentCard
                            className = "featured-item"
                            title="Maverick Hunter X Announcement"
                            subheader="July 12th, 2024"
                            imageURL={basePath + "/images/MHXAnnouncementThumbnail.png"}
                            href="/blog/maverick-hunter-x"
                            imageAlt={"From Megman X to Zero Thumbnail"}>
                                Announcement of indie project Maverick Hunter X
                        </ContentCard>

                        <ContentCard
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