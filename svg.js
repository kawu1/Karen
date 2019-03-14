console.log("loaded svg-demo")

let draw = SVG('drawing').size(480,480);
let rectwidth= 200;
let rectheight= 200;
let rect = draw.rect (100,100).fill('purple');
rect.nove(50,50);
    
     let y = 0;
     let x = 0;
     
     function moveRectangle(direction) {
         if (direction== 'right')
     { x = x + 20;
        y= y + 20;
        rect.move(x,y);
     } else if (recDirection == 'left') {
         x = x - 20
         y = y - 20
         rect.move(x,y);}
         else {
             //running off the screen 
             console.log('running off the screen')
             rectDIrection = 'left';
         }
     }
 if (x<0){
     rectDirection ='right'
 }
     if (x < 480-rectwidth){
         //normal case -if we want to move down and to the right.
         console.log('moving down and to the right')
         x = x + 20;
         y= y + 20;
         rect.move(x,y);
     } else {
         //running off screen 
         console.log('running off the screen');
         x = x - 20;
         y= y - 20;
     }

        console.log('move rectangle to 50,50');
        rect.move(x,y);
       

     
     let rectdirection = 'right';

     document.getElementById('move-rectangle-button').onclick= function() 
    {console.log('moving rectangle')

     if (rectDirection == 'right'){
        x = x + 20;
        y= y + 20;
        rect.move(x,y);
     } else if (recDirection == 'left') {
         x = x - 20
         y = y - 20
         rect.move(x,y);}
         else {
             //running off the screen 
             console.log('running off the screen')
             rectDIrection = 'left';
         }
     }
 if (x<0){
     rectDirection ='right'
 }
     if (x < 480-rectwidth){
         //normal case -if we want to move down and to the right.
         console.log('moving down and to the right')
         x = x + 20;
         y= y + 20;
         rect.move(x,y);
     } else {
         //running off screen 
         console.log('running off the screen');
         x = x - 20;
         y= y - 20;
     }

        console.log('move rectangle to 50,50');
        rect.move(x,y);
       
    