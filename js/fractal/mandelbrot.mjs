/* Función para convertir las coordenadas del canvas a números complejos.
Sin esta función, no se podría determinar qué parte del conjunto corresponde
a cada pixel del canvas */
const canvasToComplex = (
  x,
  y,
  xMin,
  xMax,
  yMin,
  yMax,
  CTX_WIDTH,
  CTX_HEIGHT
) => {
  // real = a * x + b;
  const real = (x / CTX_WIDTH) * (xMax - xMin) + xMin;
  // imag = c * y + d;
  const imag = (y / CTX_HEIGHT) * (yMax - yMin) + yMin;
  return { real, imag };
};

// Función para renderizar el fractal de Mandelbrot
export const mandelbrot = (mandelbrotSet, ctx, CTX_WIDTH, CTX_HEIGHT) => {
  ctx.clearRect(0, 0, CTX_WIDTH, CTX_HEIGHT);
  const { xMin, xMax, yMin, yMax, maxIterations, color } = mandelbrotSet;

  for (let x = 0; x < CTX_WIDTH; x++) {
    for (let y = 0; y < CTX_HEIGHT; y++) {
      const { real, imag } = canvasToComplex(
        x,
        y,
        xMin,
        xMax,
        yMin,
        yMax,
        CTX_WIDTH,
        CTX_HEIGHT
      );
      let zReal = real;
      let zImag = imag;
      let isInside = true; // ¿Está dentro del conjunto?

      for (let i = 0; i < maxIterations; i++) {
        // Se obtiene el cuadrado de la parte real e imaginaria
        const zReal2 = zReal * zReal;
        const zImag2 = zImag * zImag;

        if (zReal2 + zImag2 > 4) {
          // Si el cuadrado de la parte real más el cuadrado de la parte imaginaria
          // es mayor a 4, entonces el punto no pertenece al conjunto
          isInside = false;
          break;
        }

        // Se aplica la fórmula de Mandelbrot
        zImag = 2 * zReal * zImag + imag;
        zReal = zReal2 - zImag2 + real;
      }

      // Se cambia el color del pixel dependiendo de si el punto pertenece o no
      ctx.fillStyle = isInside ? color : "white";
      // Se pinta un pixel de 1x1
      ctx.fillRect(x, y, 1, 1);
    }
  }
};
