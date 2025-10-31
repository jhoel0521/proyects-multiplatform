# Proyectos Multiplataforma con Electron y Tauri

Este repositorio contiene dos aplicaciones de escritorio "Hola Mundo" desarrolladas con los frameworks **Electron** y **Tauri**. El objetivo es comparar el proceso de desarrollo y empaquetado para Windows y Linux.

## 📂 Estructura del Repositorio

```
/proyects-multiplatform
|
|- /electron    # Contiene el proyecto de Electron
|- /tauri       # Contiene el proyecto de Tauri
|- README.md    # Esta guía
```

---

## 🚀 Requisitos Previos

Antes de empezar, asegúrate de tener el entorno de desarrollo configurado.

### Para Ambos Proyectos

* **Node.js**: Se recomienda instalarlo a través de [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) para gestionar versiones fácilmente.
    * **Linux**: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`
    * **Windows**: Descargar el instalador de [nvm-windows](https://github.com/coreybutler/nvm-windows/releases).

### Específicos para Tauri

* **Rust**: Necesario para el backend de Tauri.
    * **Linux/Windows (PowerShell)**: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
* **Dependencias del Sistema**:
    * **Windows**: Instalar **"Desarrollo de escritorio con C++"** desde el Visual Studio Installer.
    * **Ubuntu/Debian**: `sudo apt install libwebkit2gtk-4.0-dev build-essential curl wget libssl-dev libgtk-3-dev libayatana-appindicator3-dev librsvg2-dev`

---

## ⚡ Guía de Uso

Sigue los pasos para cada proyecto. Todos los comandos deben ejecutarse desde la carpeta raíz del proyecto correspondiente (ej. `cd electron`).

### 1. Proyecto Electron (`/electron`)

#### Instalación de Dependencias
```bash
cd electron
npm install
```

#### Ejecutar en Modo Desarrollo
Esto abrirá la ventana de la aplicación para pruebas.
```bash
npm start
```

#### Compilar y Empaquetar (Build)
Este comando generará los instaladores en la carpeta `/electron/out/make`.
* `.exe` para Windows.
* `.deb` para Linux.

```bash
npm run make
```

### 2. Proyecto Tauri (`/tauri`)

#### Instalación de Dependencias
```bash
cd tauri
npm install
```

#### Ejecutar en Modo Desarrollo
La primera vez puede tardar más, ya que compila el backend de Rust.
```bash
npm run tauri dev
```

#### Compilar y Empaquetar (Build)
Este comando generará los instaladores en la carpeta `/tauri/src-tauri/target/release/bundle/`.
* `.msi` para Windows.
* `.deb` y `.AppImage` para Linux.

```bash
npm run tauri build
```