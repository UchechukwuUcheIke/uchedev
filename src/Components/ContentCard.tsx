/* eslint-disable */
//TODO: Remove this
import {Divider, Typography, Stack, Box, Paper, Card, CardHeader, CardMedia, CardContent, CardActionArea, Button} from '@mui/material';
import PropTypes from 'prop-types';
import {forwardRef, useImperativeHandle } from 'react'
import Link from 'next/link';

//TODO: Create react component for Blogs/Project cards so we don't repeat so much code


interface ContentCardProps {
    title: string,
    subheader: string,
    imageURL: string,
    imageAlt: string,
    children: string,
    href?: string,
    className?: string
};

const ContentCard = forwardRef<HTMLDivElement, ContentCardProps>(function ContentCard(props : ContentCardProps, ref) {
    let {title, subheader, imageURL, imageAlt, href, className, children, ...otherProps } = props
    return (
        <Card 
        ref={ref}
        {...otherProps}
        className={className}
        elevation={0}
        component={href ? Link : 'div'}
        href={href || ""}>
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
})

export default ContentCard