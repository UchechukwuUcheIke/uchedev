import {Divider, Typography, Stack, Box, Paper, Card, CardHeader, CardMedia, CardContent, CardActionArea, Button} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

//TODO: Create react component for Blogs/Project cards so we don't repeat so much code

function ContentCard({title, subheader, imageURL, imageAlt, children }) {
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

ContentCard.propTypes = {
    title: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    imageURL: PropTypes.string,
    imageAlt: PropTypes.string,
    children: PropTypes.string
};

export default ContentCard