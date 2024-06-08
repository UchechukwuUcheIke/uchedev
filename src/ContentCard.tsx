import {Divider, Typography, Stack, Box, Paper, Card, CardHeader, CardMedia, CardContent, CardActionArea, Button} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

//TODO: Create react component for Blogs/Project cards so we don't repeat so much code


interface ContentCardProps {
    title: string,
    subheader: string,
    imageURL: string,
    imageAlt: string,
    children: string
};


function ContentCard({title, subheader, imageURL, imageAlt, children }: ContentCardProps) {
    return (
        <Card 
        elevation={0}>
        <CardActionArea>
            <CardHeader
            title={title}
            subheader={subheader}
            sx={{flexGrow: 1}}
            />
            <CardMedia
            component="img"
            height="250"
            image={imageURL}
            alt={imageAlt}
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                {children}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    )
}

export default ContentCard