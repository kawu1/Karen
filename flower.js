console.log("loaded svg-demo")
const newLocal = SVG('drawing').size(300, 130);
let draw = newLocal;

var draw = SVG('drawing').size(300, 130)
var ellipse = draw.ellipse(150, 100).fill('#f06').move(20, 20)