import { Button, Container, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { db_1, db_2, db_3, db_4 } from "../Constants";


const intToPx = (num) =>  `${num}px`;

const updateFrame = (balls) => {
    balls[0].left = balls[0].left+1;
    balls[1].left = balls[1].left+1;
    balls[2].left = balls[2].left+1;
    return balls;
}

const dist = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2))

const solve = (x, y, r, angle, d=1) => {
    let X1=0, Y1=0, XX=0, YY=0;
    let tan = Math.tan(angle*1.01*Math.PI/180);
    
    if (angle < 90) X1=r;
    else if (angle < 270) X1=-1*r 
    else X1=r;
    Y1=X1*tan;

    XX = Math.sqrt((d*d)/(1+(tan*tan)));
    YY = XX*tan
    if (dist(X1, Y1, XX, YY) < dist(X1, Y1, -1*XX, -1*YY)) return [Math.round(x+XX), Math.round(y+YY)] 
    else return [Math.round(x-XX), Math.round(y-YY)]
}

const bounce = (balls, width, height) => {
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        // console.log(ball.angle);
        if (ball.x < 0 || ball.x >= width || ball.y < 0 || ball.y >= height) ball.angle = 360-ball.angle; //------------------
        let [newX, newY] = solve(ball.x, ball.y, 25, ball.angle);
        balls[i].x = newX;
        balls[i].y = newY;
        balls[i].angle = ball.angle;    
    }
    return balls;
}

export default function Intro()  {
    
    const [balls, setBalls] = useState([
        {name:'ball_1', color:'gold', x:100, y:0, url:db_1, angle:45},
        {name:'ball_2', color:'palegreen', x:0, y:100, url:db_2, angle:45},
        {name:'ball_3', color:'cornflowerblue', x:50, y:50, url:db_3, angle:45}
    ]);

    const [time, setTime] = useState(0);
    const boxRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            let boxWidth = boxRef.current?boxRef.current.offsetWidth : 0;
            let boxHeight = boxRef.current?boxRef.current.offsetHeight : 0;
            setBalls(bounce(balls, boxWidth, boxHeight))
            setTime(time+1)
        }, 10);
        return () => clearInterval(interval);
    }, [time, boxRef.current])


    return (
        <Container sx={{position:'relative'}}>
            <Box className='test' position='absolute' width='100%' ref={boxRef} minHeight='400px'>
                {balls.map((ball, idx) => 
                    <div className="ball" key={ball.name} style={{background:ball.color, left:intToPx(ball.x-25), top:intToPx(ball.y-25)}}>
                        <img src={ball.url} alt="dragon-ball" height='100%' width='auto'/>
                    </div>
                )}
            </Box>
            <Box className='test' position='absolute' width='100%' display='flex' justifyContent='center' alignItems='center' minHeight='400px'>
                <Typography variant="h3" sx={{color:'orange', fontWeight:'bold', mixBlendMode:'difference'}}>PRAJWAL JADHAV</Typography>
            </Box>
        </Container>
    )
}