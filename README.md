# Fractales

## Descripción del problema

Desarrollar un programa que permita renderizar un fractal cumpliendo los siguientes puntos:

1. Lenguaje de programación libre.
2. El programa debera mostrar una interfaz gráfica y generar un fractal.
3. Permitir durante la ejecución realizar variaciones de datos o valores para manipular la representación del fractal.

## Detalles del proyecto

### Lenguaje de programación
1. HTML
2. CSS
3. JavaScript

### Fractal
El fractal que se eligió para el proyecto es el conjunto de Mandelbrot, el cual es un conjunto de puntos c en el plano complejo, para los cuales la sucesión de números complejos definida por la siguiente relación de recurrencia es finita:

![equation](https://latex.codecogs.com/gif.latex?z_{n&plus;1}&space;=&space;z_{n}^{2}&space;&plus;&space;c)

para n = 0, 1, 2, ..., donde c es un número complejo constante. El conjunto de Mandelbrot es el conjunto de todos los puntos c para los cuales la sucesión no tiende al infinito.

### Interfaz gráfica

La interfaz gráfica se realizó con Canvas, el cual es un elemento de HTML5 que permite generar gráficos dinámicos y renderizar imágenes de forma dinámica mediante scripts, generalmente escritos en JavaScript.

### Funcionalidades

1. Se puede ingresar valores para los puntos iniciales y el número de iteraciones.
2. Se puede hacer zoom en el fractal, para ello se debe presionar alguno de los botones de zoom para aumentar el zoom o disminuirlo.
3. Se puede mover el fractal, para ello se debe presionar alguno de los botones de movimiento para mover el fractal hacia arriba, abajo, izquierda o derecha.
4. Se puede renderizar el fractal actual, para ello debe agregar un nuevo valor para la cantidad de iteraciones y presionar el botón de renderizar. Esto permite ver el fractal con más detalle sin que se pierda la posición actual del fractal.

## Ejecución

Para ejecutar el proyecto solo se debe abrir el archivo `index.html` en un navegador web.

Es posible que se deba ejecutar el proyecto en un servidor web local, para ello se puede utilizar la extensión de Visual Studio Code `Live Server`. Esto debido a que el proyecto utiliza módulos de JavaScript y los navegadores no permiten cargar módulos de forma local, es necesario ejecutar el proyecto en un servidor web local.

## Capturas de pantalla

![Fractal inicial](https://github.com/Gustavoand39/Fractal-Mandelbrot/assets/111763968/ee06d3a1-f645-471b-a331-259ec70eecd3)

![Fractal a detalle](https://github.com/Gustavoand39/Fractal-Mandelbrot/assets/111763968/b33c5331-dd22-4452-a872-3fb90161f30d)
