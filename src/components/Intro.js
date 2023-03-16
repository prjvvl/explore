import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
// import { db_1, db_2, db_3, db_4, db_5, db_6, db_7 } from "../Constants";

import db_1 from '../imgs/dbs/db1.png';
import db_2 from '../imgs/dbs/db2.png';
import db_3 from '../imgs/dbs/db3.png';
import db_4 from '../imgs/dbs/db4.png';
import db_5 from '../imgs/dbs/db5.png';


const intToPx = (num) =>  `${num}px`;

const random  = (min, max) => Math.round(Math.random()*(max-min)) + min;

// Ball functions
const dist = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2))

const solve = (x, y, r, angle, d=2) => {
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

        if (ball.x > width+50) {
            if (ball.angle==0) ball.angle = 180;
            else if (ball.angle < 90) ball.angle = ball.angle+90;
            else if (ball.angle > 270) ball.angle = ball.angle-90;
            else console.log('invalid Position');
        }else if (ball.x < -50) {
            if (ball.angle==180) ball.angle = 0;
            else if (ball.angle < 180) ball.angle = ball.angle-90;
            else if (ball.angle > 180) ball.angle = ball.angle+90;
        }else if (ball.y < -50 || ball.y > height+50) ball.angle = 360-ball.angle;

        let [newX, newY] = solve(ball.x, ball.y, 25, ball.angle);

        if (newX < -60 || newX > width+60 || newY < -60 || newY > height+60) {
            newX = 0;
            newY = 0;
            ball.angle = random(30, 60);
        }

        balls[i].x = newX;
        balls[i].y = newY;
        balls[i].angle = ball.angle;    
    }
    return balls;
}

// Line Functions
const updateLines = (balls, thickness=2) => {
    var lines = [];
    for (let i = 0; i < balls.length; i++) {
        for (let j=i+1; j<balls.length; j++) {
            let x1=balls[i].x, y1=balls[i].y;
            let x2=balls[j].x, y2=balls[j].y;
            var len = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
            var cx = ((x1+x2)/2) - (len/2)
            var cy = ((y1+y2)/2) - (thickness/2);
            var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
            lines.push({x:cx, y:cy, length:len, angle:angle})
        }
    }
    return lines;
}


export default function Intro()  {

    const [balls, setBalls] = useState(() => [
        {id:1, url:db_1, x:100, y:100, angle:0},
        {id:2, url:db_2, x:200, y:200, angle:0},
        {id:3, url:db_3, x:0, y:0, angle:0},
        {id:4, url:db_4, x:0, y:0, angle:0},
        {id:5, url:db_5, x:0, y:0, angle:0},
        // {id:6, url:db_6, x:0, y:0, angle:0},
        // {id:7, url:db_7, x:0, y:0, angle:0},
    ]);

    const [lines, setLines] = useState([]);

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
            setLines(updateLines(balls))
            setTime(time+1)
        }, 20);
        return () => clearInterval(interval);
    }, [time, boxRef.current])


    return (
        <div style={{height:'310px'}}>
        <div sx={{position:'relative'}}>
            <Box className='canvas' position='absolute' width='90%' marginTop='5px' ref={boxRef} height='300px' sx={{overflow:'hidden'}}>
                {balls.map((ball, idx) => 
                    <div className="ball" key={ball.id} style={{left:intToPx(ball.x-25), top:intToPx(ball.y-25)}}>
                        <img src={ball.url} alt="dragon-ball" height='100%' width='auto'/>
                    </div>
                )}
                {lines.map((line, idx) => 
                    <div className="line" key={idx} style={{left:intToPx(line.x), top:intToPx(line.y), width:intToPx(line.length), transform:`rotate(${line.angle}deg)`}}/>                                
                )}
            </Box>
            <Box className='canvas' position='absolute' width='90%' marginTop='5px' display='flex' justifyContent='center' alignItems='center' textAlign='center' height='300px'>
                <div>
                    <Typography variant="h2" sx={{color:'black', fontWeight:'bold', mixBlendMode:'difference', fontFamily:"'Quicksand', cursive", fontWeight:'300'}}>PRAJWAL JADHAV</Typography>
                    <Typography variant="overline" sx={{color:'gray', fontWeight:'bold', mixBlendMode:'difference', fontFamily:"'Shadows Into Light', cursive", fontSize:'20px' }}>i Code</Typography>
                </div>
            </Box>
        </div>
        </div>
    )
}