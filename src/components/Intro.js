import { Padding, SystemSecurityUpdate } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { db_1, db_2, db_3, db_4, db_5, db_6, db_7 } from "../Constants";


const intToPx = (num) =>  `${num}px`;

const random  = (min, max) => Math.round(Math.random()*(max-min)) + min;

const dist = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2))

const solve = (x, y, r, angle, d=64) => {
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
        
        ball.angle = ball.angle%360;

        if (ball.x > width+60) {
            if (ball.angle==0) ball.angle = 180;
            else if (ball.angle < 90) ball.angle = ball.angle+90;
            else if (ball.angle > 270) ball.angle = ball.angle-90;
            else console.log('invalid Position');
        }else if (ball.x < 0-60) {
            if (ball.angle==180) ball.angle = 0;
            else if (ball.angle < 180) ball.angle = ball.angle-90;
            else if (ball.angle > 180) ball.angle = ball.angle+90;
        }else if (ball.y < 0-60 || ball.y > height+60) ball.angle = 360-ball.angle;

        let [newX, newY] = solve(ball.x, ball.y, 25, ball.angle);
        balls[i].x = newX;
        balls[i].y = newY;
        balls[i].angle = ball.angle;    
    }
    return balls;
}

export default function Intro()  {

    const [balls, setBalls] = useState([
        {id:1, url:db_1, x:0, y:0, angle:0},
        {id:2, url:db_2, x:0, y:0, angle:0},
        {id:3, url:db_3, x:0, y:0, angle:0},
        {id:4, url:db_4, x:0, y:0, angle:0},
        {id:5, url:db_5, x:0, y:0, angle:0},
        {id:6, url:db_6, x:0, y:0, angle:0},
        {id:7, url:db_7, x:0, y:0, angle:0},
    ]);

    const [time, setTime] = useState(0);
    const boxRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            let boxWidth = boxRef.current?boxRef.current.offsetWidth : 0;
            let boxHeight = boxRef.current?boxRef.current.offsetHeight : 0;
            if (time==0) {  
                balls.forEach(ball => {
                    ball.angle = random(0, 360);
                    ball.x = random(0, boxWidth);
                    ball.y = random(0, boxHeight);
                });
            }
            setBalls(bounce(balls, boxWidth, boxHeight))
            setTime(time+1)
        }, 250);
        return () => clearInterval(interval);
    }, [time, boxRef.current])


    return (
        <Container sx={{position:'relative'}}>
            <Box className='canvas' margin='5px' position='absolute' width='100%' ref={boxRef} minHeight='400px' sx={{overflow:'hidden'}}>
                {balls.map((ball, idx) => 
                    <div className="ball" key={ball.id} style={{left:intToPx(ball.x-25), top:intToPx(ball.y-25)}}>
                        <img src={ball.url} alt="dragon-ball" height='100%' width='auto'/>
                    </div>
                )}
            </Box>
            <Box className='canvas' margin='5px' position='absolute' width='100%' display='flex' justifyContent='center' alignItems='center' minHeight='400px'>
                <Typography variant="h2" sx={{color:'orange', fontWeight:'bold', mixBlendMode:'difference'}}>PRAJWAL JADHAV</Typography>
            </Box>
        </Container>
    )
}