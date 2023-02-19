
import code from './imgs/code.jpg'

export const img1 = './imgs/code.jpg';

export const db_1 = 'https://static.thenounproject.com/png/1973941-200.png'
export const db_2 = 'https://static.thenounproject.com/png/1973936-200.png'
export const db_3 = 'https://static.thenounproject.com/png/1973940-200.png'
export const db_4 = 'https://static.thenounproject.com/png/1973938-200.png'
export const db_5 = 'https://static.thenounproject.com/png/1973937-200.png'
export const db_6 = 'https://static.thenounproject.com/png/1973939-200.png'
export const db_7 = 'https://static.thenounproject.com/png/1973935-200.png'





    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setBalls(updateFrame(balls))
    //         setTime(time+1)
    //     }, 200);
    //     return () => clearInterval(interval);
    // }, [time])


    // const boxRef = useRef(null);
    // useEffect(() => {
    //     console.log('Width: ', boxRef.current?boxRef.current.offsetWidth : 0);
    //     console.log('Height: ', boxRef.current?boxRef.current.offsetHeight : 0);
    // }, [boxRef.current]);

    const solve = (x, y, r, angle) => {
        let newX=0, newY=0, d=r;
        if (angle==90||angle==270) {
            newX = 0;
            newY = angle==90 ? d : -1*d;
        }else {
            let tan = Math.tan((angle*1.01)*Math.PI/180);
            let Xa = Math.sqrt((d*d)/(1+(tan*tan)));
            let Ya = tan*Xa;
    
            let Xb = -1*Xa;
            let Yb = tan*Xb;
    
            if (Math.pow(Xa-r, 2) + Math.pow(Ya-(r*tan), 2) <= Math.pow(Xb-r, 2) + Math.pow(Yb-(r*tan), 2)) {
                newX = Xa;
                newY = Ya;
            }else {
                newX = Xb;
                newY = Yb;
            }
        }
        return [Math.round(x+newX), Math.round(y+newY)]
    }