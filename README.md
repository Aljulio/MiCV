# Mi Hoja de Vida Profesional - Julio Alberto Hernández Morales

## Descripción del Proyecto

Este proyecto es una aplicación web personal diseñada para presentar mi hoja de vida (currículum vitae) de manera interactiva y responsiva. Fue desarrollada utilizando **React.js** para construir una interfaz de usuario dinámica y moderna, y **Vite** como herramienta de construcción rápida para el desarrollo.

El objetivo principal es mostrar mis datos personales, objetivo profesional, formación académica, experiencia laboral y habilidades técnicas de una forma clara y accesible desde cualquier dispositivo (móvil, tablet, escritorio).

## Características Clave

* **Diseño Responsivo:** Adaptable a diferentes tamaños de pantalla para una experiencia de usuario óptima en cualquier dispositivo.
* **Tecnologías Modernas:** Construido con React (Vite) para un desarrollo eficiente y un rendimiento optimizado.
* **Navegación Intuitiva:** Secciones claras (Personal, Objetivo, Formación, Experiencia, Habilidades, Portafolio, Contacto) con navegación fluida.
* **Contenido Detallado:** Incluye información esencial para un perfil profesional completo.
* **Publicación en GitHub Pages:** Acceso público y gratuito a través de un enlace web.

## Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías clave:

* **React (Vite):** Un framework de JavaScript para construir interfaces de usuario interactivas. Vite se utilizó como el "bundler" y servidor de desarrollo, proporcionando una experiencia de desarrollo rápida y moderna.
* **HTML5:** Lenguaje de marcado para la estructura fundamental del contenido web.
* **CSS3:** Hoja de estilos en cascada para el diseño y la presentación visual de la aplicación, incluyendo la adaptabilidad (responsive design).
* **JavaScript (ES6+):** Lenguaje de programación principal para la lógica interactiva del lado del cliente.
* **GH-Pages:** Una librería de Node.js utilizada para simplificar el proceso de despliegue de proyectos web a GitHub Pages.

## Instrucciones de Uso

Sigue estos pasos para obtener una copia local del proyecto, instalar sus dependencias, ejecutarlo en modo desarrollo y publicarlo en GitHub Pages.

### 1. Clonar el Repositorio

Para obtener el código fuente en tu máquina local, abre tu terminal (como la de Visual Studio Code) y ejecuta el siguiente comando:

```bash
git clone [https://github.com/Aljulio/MiCV.git](https://github.com/Aljulio/MiCV.git)

Una vez clonado, navega a la carpeta del proyecto:
```bash
cd MiCV

### 2. Instalación de Dependencias

Con la terminal dentro de la carpeta `MiCV`, instala todas las dependencias necesarias del proyecto. Asegúrate de tener Node.js y npm (o Yarn) instalados en tu sistema.

```bash
npm install
# o si usas yarn:
# yarn install

### 3. Ejecutar el Proyecto Localmente (Modo Desarrollo)

Una vez que las dependencias estén instaladas, puedes iniciar el servidor de desarrollo para ver el proyecto en tu navegador local. Esto es útil para trabajar y probar cambios.

```bash
npm run dev

### 4. Construir el Proyecto para Producción

Para crear una versión optimizada del proyecto lista para ser desplegada (con el código JavaScript y CSS minificado y optimizado), ejecuta el siguiente comando:

```bash
npm run build

### 5. Desplegar el Proyecto a GitHub Pages

Para publicar tu hoja de vida en GitHub Pages, debes tener el repositorio correctamente configurado en GitHub (rama `gh-pages` como fuente de Pages). Luego, ejecuta el comando de despliegue desde la terminal de tu proyecto:

```bash
npm run deploy

Una vez que el despliegue esté completo (puede tardar unos minutos), tu CV estará accesible públicamente en la siguiente URL:

**[https://Aljulio.github.io/MiCV/](https://Aljulio.github.io/MiCV/)**

---

## Estructura del Proyecto
Después de la sección "5. Desplegar el Proyecto a GitHub Pages" y la línea npm run deploy, lo que sigue en tu README.md es la explicación final sobre el acceso a tu CV en línea, seguida de la Estructura del Proyecto y la sección de Autor.

Aquí tienes el resto del contenido del README.md para que lo copies y pegues justo después de la línea npm run deploy en tu archivo README.md:

Markdown

Una vez que el despliegue esté completo (puede tardar unos minutos), tu CV estará accesible públicamente en la siguiente URL:

**[https://Aljulio.github.io/MiCV/](https://Aljulio.github.io/MiCV/)**

---

## Estructura del Proyecto

.
├── public/                 # Archivos estáticos (imágenes, favicons, etc.)
│   └── images/             # Tus imágenes de perfil
├── src/                    # Código fuente de React
│   ├── assets/             # (Opcional) Otros assets estáticos
│   ├── components/         # Componentes reutilizables (Personal, Objetivo, etc.)
│   ├── App.jsx             # Componente principal de la aplicación
│   ├── index.css           # Estilos CSS globales
│   └── main.jsx            # Punto de entrada de la aplicación React
├── .gitignore              # Archivos y carpetas ignorados por Git
├── package.json            # Metadatos del proyecto y scripts de npm
├── vite.config.js          # Configuración de Vite
├── README.md               # Este archivo de documentación
└── index.html              # Archivo HTML principal

---
## Autor
**Julio Alberto Hernández Morales**
