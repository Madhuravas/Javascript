const canvas=document.getElementById("canvasStuff");
const bubble=canvas.getContext("2d");

const bubbleX=100;
const bubbleY=100;
const bubbleRadius=30;

function depictCircle(bubbleX, bubbleY, color)
{
  bubble.beginPath();
  bubble.arc(bubbleX,bubbleY,bubbleRadius,0,2*Math.PI);
  bubble.fillStyle=color;
  bubble.fill();
  bubble.closePath();

}
depictCircle();
let arrowX=canvas.width-200;
const arrowY=100;
const speed=5;
let isMoving=false;

function drawArrow(){
    console.log('HEllo')
    bubble.clearRect(0,0,canvas.width,canvas.height);

    depictCircle(100, 100,'yellow');
    depictCircle(100, 180,'blue');
    depictCircle(100, 260,'red');
    depictCircle(100, 340,'green');
    bubble.beginPath();
    bubble.moveTo(arrowX,arrowY);
    bubble.lineTo(arrowX+50, arrowY-20);
    bubble.lineTo(arrowX+50, arrowY+20);
    bubble.closePath();
    bubble.fillStyle='black';
    bubble.fill();

    bubble.beginPath();
    bubble.moveTo(arrowX+50, arrowY);
    bubble.lineTo(arrowX+100,arrowY);
    bubble.lineWidth=10;
    bubble.strokeStyle="black";
    bubble.stroke();

    if(isMoving)
    {
        if(arrowX >bubbleX + bubbleRadius)
        {
            arrowX -= speed;
        }
        else
        {
            isMoving = false;
        }
    }
    requestAnimationFrame(drawArrow);
}

canvas.addEventListener('click',function(event)
{
    const clickX=event.clientX-canvas.offsetLeft;
    if(clickX >=bubbleX-bubbleRadius  && clickX <=bubbleX+bubbleRadius && !isMoving)
    {
        isMoving=true;
    }
});
function resetArrow()
{
    isMoving=false;
    arrowX=arrow1X;
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click',resetArrow);
drawArrow();