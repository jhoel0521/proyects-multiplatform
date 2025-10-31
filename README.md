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

Desde la raíz del proyecto, puedes usar los siguientes comandos para gestionar ambos proyectos fácilmente.

### Comandos Disponibles

#### Validación de Dependencias
```bash
npm run check
```
Valida que todas las dependencias del sistema (Rust, C++, etc.) y npm estén instaladas correctamente.

#### Desarrollo
```bash
# Ejecutar Electron en modo desarrollo
npm run dev:electron

# Ejecutar Tauri en modo desarrollo
npm run dev:tauri
```

#### Construcción (Build)
```bash
# Construir ambos proyectos
npm run build

# Construir solo Electron
npm run build:electron

# Construir solo Tauri
npm run build:tauri
```

Los instaladores generados se copian automáticamente a la carpeta `./output/<framework>/`.

### Compatibilidad Cross-Platform

Los scripts están diseñados para funcionar en Windows, macOS y Linux. El sistema detecta automáticamente el SO y usa los comandos apropiados (`npm` en Unix, `npm.cmd` en Windows).

### Estructura de Salida

```
./output/
├── electron/     # Instaladores de Electron
│   ├── app.exe
│   └── ...
└── tauri/        # Instaladores de Tauri
    ├── app.msi
    ├── app.exe
    └── ...
```

### Proyectos Individuales

Si prefieres trabajar en un proyecto específico, puedes ir a su carpeta y usar los comandos tradicionales.

#### 1. Proyecto Electron (`/electron`)

```bash
cd electron
npm install
npm start          # Desarrollo
npm run make       # Build
```

#### 2. Proyecto Tauri (`/tauri`)

```bash
cd tauri
npm install
npm run tauri dev  # Desarrollo
npm run tauri build # Build
```