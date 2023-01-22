
// const dist = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2))

// const solve = (x, y, r, angle) => {
//     let X1=0, Y1=0, Xa=0, Ya=0, Xb=0, Yb=0;
//     let XX=0, YY=0, d=r;
//     let tan = Math.tan(angle*1.01*Math.PI/180);
    
//     if (angle < 90) X1=r;
//     else if (angle < 270) X1=-1*r 
//     else X1=r;
//     Y1=X1*tan;

//     XX = Math.sqrt((d*d)/(1+(tan*tan)));
//     YY = XX*tan
//     if (dist(X1, Y1, XX, YY) < dist(X1, Y1, -1*XX, -1*YY)) return [Math.round(x+XX), Math.round(y+YY)] 
//     else return [Math.round(x-XX), Math.round(y-YY)]
// }


// for (let index = 0; index <= 360; index++) {
//     console.log(`angle: ${index} & value: ${solve(0, 0, 25, index)}`)
// }


let a = 4;


if (a<6) {
    a = 2;
    console.log(a);
}else if (a<5) {
    a=3;
    console.log(a);
} 
console.log(a);
