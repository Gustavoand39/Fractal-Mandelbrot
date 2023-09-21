// Función para aumentar el zoom
export const zoomIn = (xMin, xMax, yMin, yMax, zoomFactor) => {
  // Calcula el centro del plano cartesiano en X y Y
  const centerX = (xMin + xMax) / 2;
  const centerY = (yMin + yMax) / 2;
  // Calcula el nuevo ancho y alto del plano cartesiano
  // Hace que el área visible sea más pequeña, por lo tanto, más zoom
  const newWidth = (xMax - xMin) / zoomFactor;
  const newHeight = (yMax - yMin) / zoomFactor;
  // Calcula los nuevos valores de X y Y, mínimo y máximo
  xMin = centerX - newWidth / 2;
  xMax = centerX + newWidth / 2;
  yMin = centerY - newHeight / 2;
  yMax = centerY + newHeight / 2;

  return { xMin, xMax, yMin, yMax };
}

// Función para disminuir el zoom
export const zoomOut = (xMin, xMax, yMin, yMax, zoomFactor) => {
  const centerX = (xMin + xMax) / 2;
  const centerY = (yMin + yMax) / 2;
  // Hace que el área visible sea más grande, por lo tanto, menos zoom
  const newWidth = (xMax - xMin) * zoomFactor;
  const newHeight = (yMax - yMin) * zoomFactor;
  xMin = centerX - newWidth / 2;
  xMax = centerX + newWidth / 2;
  yMin = centerY - newHeight / 2;
  yMax = centerY + newHeight / 2;

  return { xMin, xMax, yMin, yMax };
}