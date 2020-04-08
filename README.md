## Gesture Calculator 

Link: https://carreterosanti.github.io/gesture-calculator/

Calculadora que permite sumar y restar, controlando dichas operaciones mediante "Drag and Drop" (Cursor) o "Swipe" (Táctil) directamente sobre los números del teclado.

## Implementación
El desarrollo del proyecto se realizó mediante **React.js**, partiendo desde la estructura inicial que provee la herramienta “Create React App”. 
Se puede destacar la implementación de un **Context** para almacenar los valores correspondientes del  “Resultado Final” y “Dígitos Parciales”. Por último cabe mencionar que se utilizó en la implementación **React Router Dom** para el acceso a la vista de “introducción a la calculadora”.

## Introducción a la Calculadora
Comenzamos por identificar las tres secciones que componen de la calculadora: Resultado Final, Dígitos Parciales y Teclado
### Sumar y Restar
Para sumar ó restar un dígito simplemente hay que deslizar hacia arriba ó hacia abajo en el número deseado en el teclado. 
Para sumar o restar números de más de un dígito, basta con ir acumulando los mismos en “Dígitos Parciales” mediante un click sobre el número del teclado. Luego para sumar o restar dicho número se realiza el mismo gesto de deslizamiento hacia arriba o hacia abajo sobre “Digitos Parciales” o sobre el último número que va a componer “Dígitos Parciales”
### Dígitos Parciales
Es posible bloquear el número presente en “Dígitos Parciales”, mediante un click sobre el mismo, evitando que este desaparezca al realizar una operación de suma o resta. Para desbloquear “Dígitos Parciales” basta con hacer un click nuevamente.  
### Eliminar y Resetear
Mediante un deslizamiento hacia arriba en la tecla “<”, se reseteara a 0 el “Resultado Final”. 
Por otro lado mediante un click sobre la tecla “<”, se eliminará el último el último dígito de “Dígitos Parciales”. Y con un deslizamiento hacia la izquierda sobre la tecla “<”, se eliminarán todos los dígitos de “Dígitos Parciales”

