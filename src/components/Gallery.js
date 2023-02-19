import { Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import { Box} from "@mui/system";
import React from "react";

import img_coding from '../imgs/coding.jpg'
import img_physics from '../imgs/atom.jpg'
import img_games from '../imgs/games.jpg'
import img_analysis from '../imgs/trends.jpg'
import img_algo from '../imgs/algo.jpg'
import img_news from '../imgs/news.jpg'

function MyCard(title, link, img, description) {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return <CardActionArea onClick={() => openInNewTab(link)}>
        <Card sx={{ display: 'flex' }} elevation='6' Paper>
            <CardMedia component="img" sx={{width: 180, height:180 }} image={img} alt="img"/>
            <Box>
                <CardContent sx={{ flex: '1  0 auto' }}>
                <Typography component="div" variant="h5">{title}</Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">{description}</Typography>
                </CardContent>
            </Box>
        </Card>
    </CardActionArea> 
}
export default function Gallery() {
    return (<Container>
        <Divider textAlign="left" sx={{borderBottomWidth: 4}}><Typography component="div" variant="h5">Projects</Typography></Divider>
        <Grid container >
            <Grid item md='6' sm='12' sx={{padding:2}}>{MyCard(
                    'Leetcore', 
                    'https://prjvvl-leetcore.netlify.app/', 
                    img_coding, 
                    'Leeetcore helps you to solve DSA more effectivly')}</Grid>
            <Grid item md='6' sm='12' sx={{padding:2}}>{MyCard(
                    'Algorithms', 
                    'https://prjvvl-leetcore.netlify.app/', 
                    img_algo, 
                    'WIP')}</Grid>  
            <Grid item md='6' sm='12' sx={{padding:2}}>{MyCard(
                    'Physiq', 
                    'https://prjvvl-leetcore.netlify.app/', 
                    img_physics, 
                    'WIP')}</Grid>
            <Grid item md='6' sm='12' sx={{padding:2}}>{MyCard(
                    'E-Extract', 
                    'https://prjvvl-leetcore.netlify.app/', 
                    img_news, 
                    'WIP')}</Grid>
            <Grid item md='6' sm='12' sx={{padding:2}}>{MyCard(
                    'Games', 
                    'https://prjvvl-leetcore.netlify.app/', 
                    img_games, 
                    'WIP')}</Grid>
            <Grid item md='6' sm='12' sx={{padding:2}}>{MyCard(
                    'Data Analysis', 
                    'https://prjvvl-leetcore.netlify.app/', 
                    img_analysis, 
                    'WIP')}</Grid>                                                                                             
        </Grid>
    </Container>)
}