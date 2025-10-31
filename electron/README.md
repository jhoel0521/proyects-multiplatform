# Proyecto de Escritorio con Electron + Vite + TypeScript

Esta aplicación es un ejemplo de "Hola Mundo" para demostrar cómo construir una aplicación de escritorio multiplataforma utilizando **Electron**. El frontend está construido con **Vite** y **TypeScript**, lo que proporciona un desarrollo moderno, rápido y seguro.

## 🚀 Guía de Inicio Rápido

Sigue estos pasos para poner en marcha el proyecto en tu máquina local (Windows o Linux).

### Paso 1: Clonar y Preparar el Proyecto

Si estás empezando desde cero en una nueva máquina, primero necesitarás clonar el repositorio principal y moverte a esta carpeta.

```bash
# Clona el repositorio (si aún no lo has hecho)
git clone <URL-del-repositorio>

# Navega a la carpeta de este proyecto
cd proyects-multiplatform/electron
```

### Paso 2: Instalar las Dependencias

Este comando leerá el archivo `package.json` e instalará todas las librerías necesarias para que el proyecto funcione.

```bash
npm install
```

### Paso 3: Ejecutar en Modo Desarrollo

Este es el comando principal que usarás mientras programas. Inicia la aplicación en un modo que se actualiza automáticamente cada vez que guardas un cambio en tu código.

```bash
npm start
```
Al ejecutarlo, se abrirá una ventana de escritorio con la aplicación.

### Paso 4: Compilar y Empaquetar para Producción

Cuando tu aplicación esté lista para ser distribuida, este comando la compilará y empaquetará en un instalador nativo para tu sistema operativo actual.

```bash
npm run make
```

El proceso generará los archivos finales dentro de la carpeta `/out/make`.
* 📦 En **Linux**, creará un paquete `.deb` y `.rpm`.
* 📦 En **Windows**, creará un instalador `.exe`.

---

## 🛠️ Personalización del "Hola Mundo"

Para editar el contenido de la aplicación:
1.  Abre el archivo `src/renderer/src/App.tsx`.
2.  Modifica el contenido JSX para personalizar el mensaje.
3.  Guarda el archivo y la aplicación en modo desarrollo se actualizará al instante.