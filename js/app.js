import { mandelbrot } from "./fractal/mandelbrot.mjs";
import { moveLeft, moveRight, moveUp, moveDown } from "./functions/movment.mjs";
import { zoomIn, zoomOut } from "./functions/zoom.mjs";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight; // Alto máximo de la ventana del navegador
const CTX_HEIGHT = canvas.height; // Alto del canvas
const CTX_WIDTH = canvas.width; // Ancho del canvas
const zoomFactor = 2.5; // Cantidad de zoom que se aplicará

// Objeto que contiene los valores por defecto del conjunto de Mandelbrot
const mandelbrotSet = {
  xMin: 0,
  xMax: 0,
  yMin: 0,
  yMax: 0,
  maxIterations: 0,
  color: "#000",
};

// Botón para dibujar el fractal de Mandelbrot
const xMin = document.getElementById("xMin"),
  xMax = document.getElementById("xMax"),
  yMin = document.getElementById("yMin"),
  yMax = document.getElementById("yMax"),
  iterations = document.getElementById("iterations");
const btnDraw = document.getElementById("btnDraw");
btnDraw.addEventListener("click", () => {
  if (
    iterations.value <= 0 ||
    xMin.value === "" ||
    xMax.value === "" ||
    yMin.value === "" ||
    yMax.value === ""
  ) {
    return alert("Por favor, ingrese todos los valores correctamente");
  }

  mandelbrotSet.xMin = parseFloat(xMin.value);
  mandelbrotSet.xMax = parseFloat(xMax.value);
  mandelbrotSet.yMin = parseFloat(yMin.value);
  mandelbrotSet.yMax = parseFloat(yMax.value);
  mandelbrotSet.maxIterations = parseInt(iterations.value);

  // Habilitar los botones para hacer zoom y mover el fractal
  btnZoomIn.disabled = false;
  btnZoomOut.disabled = false;
  btnUp.disabled = false;
  btnDown.disabled = false;
  btnLeft.disabled = false;
  btnRight.disabled = false;
  btnRender.disabled = false;
  btnReset.disabled = false;

  mandelbrot(mandelbrotSet, ctx, CTX_WIDTH, CTX_HEIGHT);
});

/* Botón para renderizar el fractal con un nuevo número de
iteraciones sin cambiar el fractal actual */
const btnRender = document.getElementById("btnRender");
btnRender.addEventListener("click", () => {
  if (iterations.value <= 0) {
    return alert("La cantidad de iteraciones debe ser mayor a 0");
  }
  mandelbrotSet.maxIterations = parseInt(iterations.value);
  mandelbrot(mandelbrotSet, ctx, CTX_WIDTH, CTX_HEIGHT);
});

// Botones para hacer zoom en el fractal
const btnZoomIn = document.getElementById("btnZoomIn"),
  btnZoomOut = document.getElementById("btnZoomOut");

btnZoomIn.addEventListener("click", () => {
  const { xMin, xMax, yMin, yMax } = mandelbrotSet;
  const result = zoomIn(xMin, xMax, yMin, yMax, zoomFactor);
  mandelbrotSet.xMin = result.xMin;
  mandelbrotSet.xMax = result.xMax;
  mandelbrotSet.yMin = result.yMin;
  mandelbrotSet.yMax = result.yMax;
  mandelbrot(mandelbrotSet, ctx, CTX_WIDTH, CTX_HEIGHT);
});

btnZoomOut.addEventListener("click", () => {
  const { xMin, xMax, yMin, yMax } = mandelbrotSet;
  const result = zoomOut(xMin, xMax, yMin, yMax, zoomFactor);
  mandelbrotSet.xMin = result.xMin;
  mandelbrotSet.xMax = result.xMax;
  mandelbrotSet.yMin = result.yMin;
  mandelbrotSet.yMax = result.yMax;
  mandelbrot(mandelbrotSet, ctx, CTX_WIDTH, CTX_HEIGHT);
});

// Botones para mover el fractal por el canvas
const btnUp = document.getElementById("btnUp"),
  btnDown = document.getElementById("btnDown"),
  btnLeft = document.getElementById("btnLeft"),
  btnRight = document.getElementById("btnRight");

btnUp.addEventListener("click", () => {
  const { yMin, yMax } = mandelbrotSet;
  const result = moveUp(yMin, yMax);
  mandelbrotSet.yMin = result.yMin;
  mandelbrotSet.yMax = result.yMax;
  mandelbrot(mandelbrotSet, ctx, CTX_WIDTH, CTX_HEIGHT);
});

btnDown.addEventListener("click", () => {
  const { yMin, yMax } = mandelbrotSet;
  const result = moveDown(yMin, yMax);
  mandelbrotSet.yMin = result.yMin;
  mandelbrotSet.yMax = result.yMax;
  mandelbrot(mandelbrotSet, ctx, CTX_WIDTH, CTX_HEIGHT);
});

btnLeft.addEventListener("click", () => {
  const { xMin, xMax } = mandelbrotSet;
  const result = moveLeft(xMin, xMax);
  mandelbrotSet.xMin = result.xMin;
  mandelbrotSet.xMax = result.xMax;
  mandelbrot(mandelbrotSet, ctx, CTX_WIDTH, CTX_HEIGHT);
});

btnRight.addEventListener("click", () => {
  const { xMin, xMax } = mandelbrotSet;
  const result = moveRight(xMin, xMax);
  mandelbrotSet.xMin = result.xMin;
  mandelbrotSet.xMax = result.xMax;
  mandelbrot(mandelbrotSet, ctx, CTX_WIDTH, CTX_HEIGHT);
});

// Botón para reiniciar el canvas
const btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", () => {
  ctx.clearRect(0, 0, CTX_WIDTH, CTX_HEIGHT);
  btnZoomIn.disabled = true;
  btnZoomOut.disabled = true;
  btnUp.disabled = true;
  btnDown.disabled = true;
  btnLeft.disabled = true;
  btnRight.disabled = true;
  btnRender.disabled = true;
  btnReset.disabled = true;
  xMin.value = "";
  xMax.value = "";
  yMin.value = "";
  yMax.value = "";
  iterations.value = "";
  mandelbrotSet.xMin = 0;
  mandelbrotSet.xMax = 0;
  mandelbrotSet.yMin = 0;
  mandelbrotSet.yMax = 0;
  mandelbrotSet.maxIterations = 0;
});
