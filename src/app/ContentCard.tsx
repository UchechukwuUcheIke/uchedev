import {Divider, Typography, Stack, Box, Paper, Card, CardHeader, CardMedia, CardContent, CardActionArea, Button} from '@mui/material';
import React, { Component, ElementType } from 'react';
import PropTypes from 'prop-types';

//TODO: Create react component for Blogs/Project cards so we don't repeat so much code


interface ContentCardProps {
    title: string,
    subheader: string,
    imageURL: string,
    imageAlt: string,
    children: string,
    component?: ElementType,
    href?: string,
};

function ContentCard({title, subheader, imageURL, imageAlt, component, href, children }: ContentCardProps) {
    return (
        <Card 
        elevation={0}
        component={component}
        href={href}>
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