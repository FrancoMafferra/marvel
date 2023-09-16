# Documentación del Proyecto

## Introducción
Este proyecto es una aplicación web que muestra una lista de cómics de Marvel y permite ver los detalles de cada cómic. Utiliza la API de Marvel para obtener los datos de los cómics.

## Configuración de Redux
La configuración de Redux se encuentra en la carpeta `redux`. A continuación se detallan los archivos relevantes:

- `store.js`: Configura el store de Redux utilizando `createStore` y `applyMiddleware`. Se utiliza el middleware `thunk` para permitir acciones asíncronas.

- `reducers.js`: Combina los reducers individuales en un reducer raíz utilizando `combineReducers`.

## Componentes

### ComicList
El componente `ComicList` muestra una lista paginada de cómics. Utiliza Redux para obtener los cómics desde el estado global.

- `fetchComics`: Acción que se dispara al cargar el componente para obtener los cómics desde la API de Marvel.

- `nextPage` y `prevPage`: Acciones que se disparan al hacer clic en los botones de navegación de página.

### ComicDetail
El componente `ComicDetail` muestra los detalles de un cómic específico. Utiliza Redux para obtener el cómic seleccionado desde el estado global.

- `fetchComic`: Acción que se dispara al cargar el componente para obtener los detalles del cómic seleccionado desde la API de Marvel.

### ComicSearch
El componente `ComicSearch` permite buscar cómics por título. Utiliza Redux para almacenar los resultados de búsqueda.

- `searchComics`: Acción que se dispara al ingresar un término de búsqueda para obtener los cómics relacionados desde la API de Marvel.

## Acciones y Reducers

### Acciones
- `fetchComics`: Obtiene los cómics desde la API de Marvel y actualiza el estado con los datos obtenidos.

- `nextPage` y `prevPage`: Actualizan el estado con el número de página actual para la paginación.

- `fetchComic`: Obtiene los detalles de un cómic específico desde la API de Marvel y actualiza el estado con los datos obtenidos.

- `searchComics`: Realiza una búsqueda de cómics por título y actualiza el estado con los resultados obtenidos.

### Reducers
- `comicReducer`: Maneja el estado relacionado con los cómics. Actualiza el estado con los cómics obtenidos, el cómic seleccionado, los resultados de búsqueda y el número de página actual.

## API y Llamadas a Servicios
La aplicación utiliza la API de Marvel para obtener los datos de los cómics. Se realizan llamadas a la API utilizando la librería `axios` y se utiliza el hash MD5 para autenticación.

## Instalación y Ejecución
1. Clona el repositorio desde [URL del repositorio].
2. Instala las dependencias ejecutando `npm install`.
3. Crea un archivo `.env` en la raíz del proyecto y define las claves de acceso a la API de Marvel.
4. Ejecuta la aplicación utilizando `npm start`.

## Dependencias
- `react`: [^18.2.0]
- `react-redux`: [^8.1.2]
- `redux`: [^4.2.1]
- `axios`: [^1.5.0]
- `crypto-js`: [^4.1.1]
- `react-router-dom`: [^6.16.0]

## Consideraciones adicionales
- Asegúrate de tener una conexión a Internet activa para poder obtener los datos de los cómics desde la API de Marvel.
- La paginación de la lista de cómics se realiza de a [5] cómics por página.
- La búsqueda de cómics se realiza a partir de [1] caracteres ingresados en el campo de búsqueda.