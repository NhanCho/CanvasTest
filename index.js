let canvas = document.getElementById("canvas");

/**
 * @param {*} canvas
 * @returns {CanvasRenderingContext2D}
 */
function draw(canvas){
    return canvas.getContext("2d");
}
let pen = draw(canvas);

function normal(){
pen.beginPath();    
pen.arc(430,250,200,0,Math.PI *2);
pen.fillStyle ="yellow";
pen.fill();
pen.stroke();

pen.beginPath();
pen.arc(330,230,50,0,Math.PI*2);
pen.fillStyle ="white";
pen.fill();
pen.stroke();
pen.beginPath();
pen.arc(530,230,50,0,Math.PI*2);
pen.fillStyle="white";
pen.fill(); 
pen.stroke();

pen.beginPath();
pen.arc(330,230,20,0,Math.PI*2);
pen.fillStyle ="black";
pen.fill();
pen.stroke();
pen.beginPath();
pen.arc(530,230,20,0,Math.PI*2);
pen.fillStyle="black";
pen.fill(); 
pen.stroke();

pen.beginPath()
pen.moveTo(360,340);
pen.lineTo(500,340);
pen.stroke();
}
normal();

function mouth(){
pen.beginPath();    
pen.arc(430,250,200,0,Math.PI *2);
pen.fillStyle ="yellow";
pen.fill();
pen.stroke();

pen.beginPath();
pen.arc(330,230,50,0,Math.PI*2);
pen.fillStyle ="white";
pen.fill();
pen.stroke();
pen.beginPath();
pen.arc(530,230,50,0,Math.PI*2);
pen.fillStyle="white";
pen.fill(); 
pen.stroke();

pen.beginPath();
pen.arc(330,230,20,0,Math.PI*2);
pen.fillStyle ="black";
pen.fill();
pen.stroke();
pen.beginPath();
pen.arc(530,230,20,0,Math.PI*2);
pen.fillStyle="black";
pen.fill(); 
pen.stroke();

pen.beginPath();
pen.arc(430,350,30,0,Math.PI*2);
pen.fillStyle="black";
pen.fill();
pen.stroke();
}

canvas.addEventListener("mousedown",(event)=>{
    pen.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    mouth();    
})

canvas.addEventListener("mouseup",(event)=>{
    pen.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    normal();    
})

