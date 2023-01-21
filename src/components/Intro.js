import { Button, Container, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import { logDOM } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";


const intToPx = (num) =>  `${num}px`;

const updateFrame = (balls) => {
    balls[0].left = balls[0].left+10;
    balls[1].left = balls[1].left+10;
    balls[2].left = balls[2].left+10;
    return balls;
}

export default function Intro()  {
    
    const [time, setTime] = useState(0);

    const [balls, setBalls] = useState([
        {name:'ball_1', color:'red', left:250, top:220},
        {name:'ball_2', color:'blue', left:400, top:170},
        {name:'ball_3', color:'green', left:550, top:120}
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setBalls(updateFrame(balls))
            setTime(time+1)
        }, 2000);
        return () => clearInterval(interval);
    }, [time])


    const boxRef = useRef(null);
    useEffect(() => {
        console.log('Width: ', boxRef.current?boxRef.current.offsetWidth : 0);
        console.log('Height: ', boxRef.current?boxRef.current.offsetHeight : 0);
    }, [boxRef.current]);


    return (
        <Container sx={{position:'relative'}}>
            <Box position='absolute' width='100%' minHeight='500px' ref={boxRef}>
                {balls.map((ball, idx) => {return <div className="ball" key={ball.name} style={{background:ball.color, left:intToPx(ball.left), top:intToPx(ball.top)}}/>;})}
            </Box>
            <Box position='absolute' width='100%' className='test' display='flex' justifyContent='center' alignItems='center' minHeight='500px'>
                <Typography variant="h3" sx={{color:'orange', fontWeight:'bold', mixBlendMode:'difference'}}>PRAJWAL JADHAV</Typography>
            </Box>
        </Container>
    )
}