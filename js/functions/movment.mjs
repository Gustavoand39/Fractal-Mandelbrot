/* Las funciones de este archivo se encargan de mover el plano cartesiano.
Calcula el nuevo rango de valores para xMin y xMax
desplazandose 40% del rango actual hacía la dirección indicada */

export const moveUp = (yMin, yMax) => {
  const yOffset = (yMax - yMin) * 0.3;
  yMin -= yOffset;
  yMax -= yOffset;

  return {yMin, yMax};
}

export const moveLeft= (xMin, xMax) => {
  const xOffset = (xMax - xMin) * 0.3;
  xMin -= xOffset;
  xMax -= xOffset;

  return {xMin, xMax};
}

export const moveDown = (yMin, yMax) => {
  const yOffset = (yMax - yMin) * 0.3;
  yMin += yOffset;
  yMax += yOffset;

  return {yMin, yMax};
}

export const moveRight = (xMin, xMax) => {
  const xOffset = (xMax - xMin) * 0.3;
  xMin += xOffset;
  xMax += xOffset;

  return {xMin, xMax};
}