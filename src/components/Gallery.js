import { Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import { Box} from "@mui/system";
import React from "react";

import img_coding from '../imgs/code.jpg'
import img_youtube from '../imgs/ytb.jpg'
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
        <Card className="test" sx={{ display: 'flex' }} elevation='6' Paper>
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
        <br/>
        <Divider textAlign="left" sx={{borderBottomWidth: 4}}><Typography component="div" variant="h5">Projects</Typography></Divider>
        <Grid container >
            <Grid item md='6' sm='12' sx={{padding:2}}>{MyCard(
                    'Leetcore', 
                    'https://prjvvl-leetcore.netlify.app/', 
                    img_coding, 
                    'Leeetcore helps you to solve DSA more effectivly')}</Grid>                                                                                            
        </Grid>
        <br/><Divider textAlign="left" sx={{borderBottomWidth: 4}}><Typography component="div" variant="h5">Work In Progress</Typography></Divider>
        <Grid container >
        <Grid item md='6' sm='12' sx={{padding:2}}>{MyCard(
                    'MyTube', 
                    'https://prjvvl-leetcore.netlify.app/', 
                    img_youtube, 
                    'WIP')}</Grid>     
            <Grid item md='6' sm='12' sx={{padding:2}}>{MyCard(
                    'Algorithm Visualizer', 
                    'https://prjvvl-leetcore.netlify.app/', 
                    img_algo, 
                    'WIP')}</Grid>                                                                                     
        </Grid>
        <br/>
    </Container>)
}