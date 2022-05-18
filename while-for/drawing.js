const linesNumber1 = document.getElementById("input-lines-one");
const linesColor1 = document.getElementById("input-color-one");
const linesNumber2 = document.getElementById("input-lines-two");
const linesColor2 = document.getElementById("input-color-two");
const drawing1 = document.getElementById("drawing-one");
const drawing2 = document.getElementById("drawing-two");
const canvaContainer = document.getElementById("canva-container");

canvaContainer.style.display = "none";

function drawLine(context, color, xStart, yStart, xEnd, yEnd)
{
  context.beginPath();
  context.strokeStyle = color;
  context.moveTo(xStart, yStart);
  context.lineTo(xEnd, yEnd);
  context.stroke();
  context.closePath();
};

const drawCorners = (context, linesColor, aPoint, bPoint, cPoint, dPoint) => {
  drawLine(context, linesColor, dPoint, bPoint, cPoint, aPoint);
  drawLine(context, linesColor, bPoint, dPoint, aPoint, cPoint);
  drawLine(context, linesColor, aPoint, bPoint, aPoint - cPoint, aPoint);
  drawLine(context, linesColor, dPoint, aPoint - bPoint, cPoint, dPoint);
};

const drawingWhile = () => {
  const lines = parseInt(linesNumber1.value);
  if (numberValidation(lines)) {
    canvaContainer.style.display = "flex";
    clearCanva(drawing1);
    const aPoint = drawing1.width;
    const spaceBetween = aPoint / lines;
    let singleLine = 0;

    while (singleLine < lines) {
      let bPoint = spaceBetween * singleLine;
      let cPoint = spaceBetween * (singleLine + 1);
      drawCorners(
        drawing1.getContext("2d"),
        linesColor1.value,
        aPoint,
        bPoint,
        cPoint,
        0
      );
      singleLine += 1;
    }
  } else {
      clearCanva(drawing1);
  }
};

const drawingFor = () => {
  const lines = parseInt(linesNumber2.value);
  if (numberValidation(lines)) {
    canvaContainer.style.display = "flex";
    clearCanva(drawing2);
    const aPoint = drawing2.width;
    const spaceBetween = aPoint / lines;
    for (let singleLine = 0; singleLine < lines; singleLine++) {
      let bPoint = spaceBetween * singleLine;
      let cPoint = spaceBetween * (singleLine + 1);
      drawCorners(
        drawing2.getContext("2d"),
        linesColor2.value,
        aPoint,
        bPoint,
        cPoint,
        0
      );
    }
  } else {
    clearCanva(drawing2);
  }
};

const clearCanva = (canva) => {
  const context = canva.getContext("2d");
  context.clearRect(0, 0, canva.width, canva.height);
};

const numberValidation = (number) => {
  if (number <= 0) {
    alert("El número es negativo o cero");
    return false;
  }
  return true;
};
