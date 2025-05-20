# Integrantes del Grupo y Descripción del proyecto:

 __________________________________________________________
|               INTEGRANTES DEL GRUPO 22:                  |
|__________________________________________________________|
|    Apellido y Nombres     |  Nombres de usuario Github   |
|__________________________________________________________|
|Antenor, Maximiliano       | maxiant                      |
|Cayo, Pedro Dardo Ramon    | PedroDardoRamonCayo          |
|Torres, Pablo Gabriel      | eneporene                    |
|Torres, Cintia Cristina    | Chris213-boop                |
|Vargas Soraide, Ana Lucia  | luciasoraide                 |
|___________________________|______________________________|


# 🛒 Aplicación para Gestión de Productos (React)

Aplicación web construida con React para la gestión de productos. Permite agregar, buscar, editar, eliminar y visualizar productos activos e inactivos con formularios simples e interfaz intuitiva.


## 🚀 Funcionalidades

- Agregar productos con validaciones.
- Buscar productos por ID, nombre o marca.
- Editar precio, descuento y stock de productos existentes.
- Eliminar productos por ID o nombre (marcados como inactivos, no se borran).
- Visualizar listas separadas de productos activos e inactivos.
- Cálculo automático de precio con descuento.


## 🧱 Estructura del Proyecto

src/
├── assets/
|     ├── components/
|     |    ├── App.jsx
|     |    ├── ProductForm.jsx
|     |    ├── ProductDelete.jsx
|     |    ├── ProductEdit.jsx
|     |    ├── ProductList.jsx
|     |    ├── SearchResults.jsx
|     |    ├── SearchBar.jsx
|     |    └── ProductItem.jsx
|     └── css/
|          └── Estilos.css
└── main.jsx

## 📄 Componentes y Responsabilidades

| Componente         | Rol Principal                                                                                                   |
|--------------------|-----------------------------------------------------------------------------------------------------------------|
| App.jsx            | Componente principal. Administra el estado global de productos y conecta toda la lógica con los subcomponentes. |
| ProductForm.jsx    | Formulario para agregar productos nuevos. Usa validación y crea objetos con ProductItem.jsx.                    |
| ProductItem.jsx    | Función auxiliar para crear un objeto producto con id, precioConDescuento, y estado.                            |
| ProductDelete.jsx  | Formulario para deshabilitar (eliminar lógicamente) productos por ID o nombre.                                  |
| ProductEdit.jsx    | Formulario para editar precio, descuento y stock de productos activos.                                          |
| ProductList.jsx    | Muestra dos tablas: una con productos activos y otra con inactivos.                                             |
| SearchResults.jsx  | Muestra resultados de búsqueda y contiene a SearchBar. Usa useMemo para optimización.                           |
| SearchBar.jsx      | Barra de búsqueda interactiva. Usa useCallback para evitar renders innecesarios.                                |
| Estilos.css        | Archivo de estilos generales.                                                                                   |

## 🧠 Tecnologías y Hooks Usados

### ⚙ React
- useState: manejo de formularios y estado general.
- useEffect: logging de cambios en la lista de productos.
- useCallback: evita recrear funciones en App y SearchBar.
- useMemo: optimiza renderizado de búsqueda.


## 📌 Estados y Datos

### Objeto Producto:
{
  id: number,               // Generado automáticamente
  nombre: string,
  marca: string,
  precio: number,
  descuento: number,        // Porcentaje
  precioConDescuento: number, // Calculado automáticamente
  stock: number,
  estado: boolean           // true = activo, false = inactivo
}

