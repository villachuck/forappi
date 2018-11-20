# forappi
Reto front end

Para revisar la prueba, se deberán seguir lo siguientes pasos:

Tener o instalar node (https://nodejs.org/es/).

Instalar http-server: npm install http-server -g

Clonar repo: git clone https://github.com/villachuck/forappi.git

Abrir el repo clonado: cd forappi

Abrir en el server: http-server -o

Detalle en los filtros:

-Se muestran todos los resultados al dar clic en las categorías, se encuentren disponibles o no. Para los no disponibles se ocultó el botón para agregar al carrito, además de ocultar el stock (en teoría, si no está disponible es porque ya no tiene stock en la mayoría de los casos).

-Para el filtro de Cantidad, sólo se devolverán los productos disponibles, y al limpiar el filtro, se mostrarán nuevamente todos.

-Para el ordenamiento de mayor a menor y viceversa en cantidad, se tiene la misma lógica de ordenar y mostrar sólo los productos disponibles.
