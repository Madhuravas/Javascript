const canvas = document.getElementById("canvasStuff");
const bubble = canvas.getContext("2d");

let bubbleX = 100;
let bubble1X = canvas.width - 200;
let bubble1Y = 100;
let bubble2X = canvas.width - 200;
let bubble2Y = 180;
let bubble3X = canvas.width - 200;
let bubble3Y = 260;
let bubble4X = canvas.width - 200;
let bubble4Y = 340;
let bubbleRadius = 30;

function depictCircle(bubbleX, bubbleY, color) {
  bubble.beginPath();
  bubble.arc(bubbleX, bubbleY, bubbleRadius, 0, 2 * Math.PI);
  bubble.fillStyle = color;
  bubble.fill();
  bubble.closePath();
}
depictCircle();
let arrowX = canvas.width - 200;
let arrow2X = arrowX;
let arrow3X = arrowX;
let arrow4X = arrowX;
const arrowY = 100;
const speed = 5;
let isMoving = false;
let isMoving2 = false;
let isMoving3 = false;
let isMoving4  = false;

function drawArrow() {
  bubble.clearRect(0, 0, canvas.width, canvas.height);

  depictCircle(100, 100, 'yellow');
  depictCircle(100, 180, 'blue');
  depictCircle(100, 260, 'red');
  depictCircle(100, 340, 'green');
 
  bubble.beginPath();
  bubble.moveTo(bubble1X, bubble1Y);
  bubble.lineTo(bubble1X + 50, bubble1Y - 15);
  bubble.lineTo(bubble1X + 50, bubble1Y + 15);

  bubble.moveTo(bubble2X, bubble2Y);
  bubble.lineTo(bubble2X + 50, bubble2Y - 15);
  bubble.lineTo(bubble2X + 50, bubble2Y + 15);

  bubble.moveTo(bubble3X , bubble3Y);
  bubble.lineTo(bubble3X + 50, bubble3Y - 15);
  bubble.lineTo(bubble3X + 50, bubble3Y + 15);

  bubble.moveTo(bubble4X , bubble4Y);
  bubble.lineTo(bubble4X + 50, bubble4Y - 15);
  bubble.lineTo(bubble4X + 50, bubble4Y + 15);

  bubble.closePath();
  bubble.fillStyle = 'black';
  bubble.fill();

  bubble.beginPath();
  bubble.moveTo(bubble1X + 50, bubble1Y);
  bubble.lineTo(bubble1X + 100, bubble1Y);

  bubble.moveTo(bubble2X + 50, bubble2Y);
  bubble.lineTo(bubble2X + 100, bubble2Y);

  bubble.moveTo(bubble3X + 50, bubble3Y);
  bubble.lineTo(bubble3X + 100, bubble3Y);

  bubble.moveTo(bubble4X + 50, bubble4Y);
  bubble.lineTo(bubble4X + 100, bubble4Y);

  bubble.lineWidth = 10;
  bubble.strokeStyle = "black";
  bubble.stroke();

  if (isMoving) {
    if (bubble1X > bubbleX + bubbleRadius) {
      bubble1X -= speed;
    } else {
      isMoving = false;
    }
  }

  if (isMoving2) {
    if (bubble2X > bubbleX + bubbleRadius) {
      bubble2X -= speed;
    } else {
      isMoving2 = false;
    }
  }

  if (isMoving3) {
    if (bubble3X > bubbleX + bubbleRadius) {
      bubble3X -= speed;
    } else {
      isMoving3 = false;
    }
  }

  if (isMoving4) {
    if (bubble4X > bubbleX + bubbleRadius) {
      bubble4X -= speed;
    } else {
      isMoving4 = false;
    }
  }

  requestAnimationFrame(drawArrow);
}

canvas.addEventListener('click', function (event) {
  console.log(event)
  const clickX = event.clientX - canvas.offsetLeft;
  const clickY = event.clientY - canvas.offsetTop;

  if ( clickX <= bubble1X + bubbleRadius 
    && clickY <= bubble1Y + bubbleRadius && !isMoving) {
    isMoving = true;
  }

  if (clickX <= bubble2X + bubbleRadius 
    && clickY <= bubble2Y + bubbleRadius && !isMoving2 && !isMoving) {
    isMoving2 = true;
  }

  if (clickX <= bubble3X + bubbleRadius 
    && clickY <= bubble3Y + bubbleRadius && !isMoving && !isMoving2 && !isMoving3) {
    isMoving3 = true;
  }

  if (clickX <= bubble4X + bubbleRadius 
    && clickY <= bubble4Y + bubbleRadius && !isMoving && !isMoving2 && !isMoving3 && !isMoving4) {
    isMoving4 = true;
  }
});

function resetArrow() {
  isMoving = false;
  bubble1X = canvas.width - 200;
  bubble2X = canvas.width - 200;
  bubble3X = canvas.width - 200;
  bubble4X = canvas.width - 200;
  isMoving = false;
  isMoving2 = false;
  isMoving3 = false;
  isMoving4  = false;
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', resetArrow);

drawArrow();