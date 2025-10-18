# Portafolio Personal de Bastián Rubio

![Captura de pantalla del Portafolio](https://i.ibb.co/vxkphV9R/image.png)

Este es el repositorio de mi portafolio personal, una Single Page Application (SPA) construida desde cero para mostrar mis habilidades, experiencia y proyectos. El objetivo era crear una web moderna, rápida y visualmente atractiva, aplicando las mejores prácticas de desarrollo Frontend.

**[➡️ Ver el portafolio en vivo](https://bastian-dev.netlify.app/)** *(<-- HAZ CLICK)*

---

## ✨ Características Principales

* **Arquitectura Escalable (Atomic Design)**: Implementación estricta de Atomic Design para garantizar un sistema de componentes cohesivo, reutilizable y fácil de mantener.
* **Diseño Moderno y Responsivo**: Desarrollado con un enfoque *Mobile-First* y estilizado con **TailwindCSS 4**, asegurando una experiencia de usuario perfecta en cualquier dispositivo.
* **Stack Tecnológico Moderno**: Construido con **React 19**, **Vite** como empaquetador ultrarrápido y **TypeScript** para un código robusto y tipado.
* **Testing Riguroso**: Cobertura de pruebas unitarias y de integración para cada componente utilizando **Vitest** y **React Testing Library**, asegurando la fiabilidad del código.
* **Seguridad Frontend**: Sanetización de HTML con **DOMPurify** para prevenir ataques XSS al renderizar contenido dinámico.
* **Optimización y Rendimiento**: Uso de Vite para un desarrollo ágil con HMR (Hot Module Replacement) y un empaquetado de producción altamente optimizado.
* **Contenido Centralizado**: Gestión de todo el contenido del sitio (textos, datos de proyectos, etc.) desde un único archivo (`profile.tsx`) para facilitar las actualizaciones y el mantenimiento.
* **Listo para Despliegue**: Contenedorizado con un **Dockerfile multi-etapa** que crea una imagen ligera y segura, lista para cualquier plataforma de despliegue moderna.
---

## 🛠️ Stack Tecnológico

| Categoría         | Tecnología                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| **Framework** | React 19                                                                                                    |
| **Lenguaje** | TypeScript                                                                                                  |
| **Enrutador** | React Router 7                                                                                              |
| **Estilos** | TailwindCSS 4                                                                                               |
| **Build Tool** | Vite                                                                                                        |
| **Testing** | Vitest, React Testing Library, JSOM                                                                         |
| **Iconos** | React Icons                                                                                                 |
| **Contenedores** | Docker                                                                                                      |

---
## 🧪 Testing

El proyecto tiene un fuerte enfoque en la calidad del código, con una estrategia de testing que abarca todos los niveles de la arquitectura de componentes.

-   **Test Runner**: **Vitest** se utiliza por su alta velocidad y su integración nativa con Vite.
-   **Librería de Pruebas**: **React Testing Library** para realizar pruebas centradas en el comportamiento del usuario.
-   **Cobertura**: Se incluyen pruebas para componentes atómicos, moleculares y organismos, verificando su renderizado, interactividad y comportamiento condicional.
-   **Mocking**: Las dependencias, como los datos del perfil o los componentes hijos, se mockean para asegurar que las pruebas sean aisladas y deterministas.

---

## 🚀 Cómo Empezar

Si deseas ejecutar este proyecto en tu entorno local, sigue estos sencillos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/BastianEd/portafolio.git](https://github.com/BastianEd/portafolio.git)
    cd portafolio
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.
    

4.  **Ejecutar pruebas:**
    ```bash
    npm run test
    ```

---

## 🐳 Despliegue con Docker

El proyecto está listo para ser contenedorizado. El `Dockerfile` utiliza una construcción multi-etapa para generar una imagen de producción optimizada.

1.  **Construir la imagen de Docker:**
    ```bash
    docker build -t mi-portafolio .
    ```

2.  **Ejecutar el contenedor:**
    ```bash
    docker run -p 8080:80 mi-portafolio
    ```
    La aplicación estará disponible en `http://localhost:8080`.