# Proyecto de Escritorio con Tauri + Angular + TypeScript

Esta aplicación es un ejemplo de "Hola Mundo" para demostrar cómo construir una aplicación de escritorio multiplataforma utilizando **Tauri**. A diferencia de Electron, Tauri no empaqueta un navegador completo, sino que utiliza el motor de renderizado web nativo del sistema operativo, resultando en aplicaciones increíblemente pequeñas, rápidas y seguras.

El frontend está construido con **Angular** y **TypeScript**.

## 🤔 ¿Por Qué Tantas Dependencias? Entendiendo la Arquitectura

Antes de instalar, es clave entender qué hace cada pieza. Así es como Tauri logra ser tan eficiente:

1.  **El Frontend (Angular):** Es tu interfaz de usuario, lo que ves y con lo que interactúas. Se escribe con tecnologías web (HTML, CSS, TypeScript).
2.  **El Backend (Rust):** Es el corazón de la aplicación de escritorio. Se encarga de crear la ventana, manejar el menú, interactuar con el sistema de archivos, etc. Está escrito en **Rust**, un lenguaje de programación conocido por su velocidad y seguridad.
3.  **La Conexión (El "Puente"):** Tauri crea un puente seguro para que tu frontend (Angular) pueda enviar mensajes y pedirle cosas al backend (Rust).

Ahora, las dependencias tienen sentido:
* **Rust y Cargo:** Necesitas **Rust** porque es el lenguaje del backend. **Cargo** es el gestor de paquetes y herramienta de construcción de Rust (como `npm` es para Node.js). Cuando ejecutas `npm run tauri build`, Cargo se encarga de compilar tu código Rust en un ejecutable nativo.
* **C++ Build Tools / `build-essential`:** ¡Son los compiladores! Para que Cargo pueda transformar el código Rust en un `.exe` (Windows) o un binario (Linux), necesita estas herramientas fundamentales del sistema que saben cómo construir programas.
* **WebView2 / `webkit2gtk`:** Es el motor de renderizado web. En lugar de empaquetar todo un navegador, Tauri le pide al sistema operativo: "Oye Windows/Linux, préstame tu motor de navegador para mostrar esta interfaz de Angular". Esto ahorra cientos de megabytes.

---

## 🚀 Guía de Instalación y Uso

Sigue los pasos correspondientes a tu sistema operativo.

### ✅ Prerrequisitos en Windows (Instalación de única vez)

1.  **Node.js:** Asegúrate de tenerlo instalado (preferiblemente vía `nvm-windows`).
2.  **Microsoft C++ Build Tools:** Son esenciales para compilar el backend.
    * Ejecuta en una terminal de PowerShell como Administrador:
        ```powershell
        winget install Microsoft.VisualStudio.2022.BuildTools
        ```
    * O, desde el **Visual Studio Installer**, asegúrate de marcar la carga de trabajo **"Desarrollo de escritorio con C++"** y darle a "Instalar". Este paso puede tardar bastante, ¡paciencia! 
3.  **WebView2:** Normalmente ya viene con Windows 10/11. Si no, [instálalo desde la web oficial de Microsoft](https://developer.microsoft.com/en-us/microsoft-edge/webview2/).
4.  **Rust:** Instala Rust y Cargo con este comando en PowerShell:
    ```powershell
    irm [https://static.rust-lang.org/rustup-init.exe](https://static.rust-lang.org/rustup-init.exe) | iex
    ```
    (Elige la opción 1 por defecto).

### ✅ Prerrequisitos en Ubuntu/Debian (Instalación de única vez)

1.  **Node.js:** Asegúrate de tenerlo instalado (preferiblemente vía `nvm`).
2.  **Dependencias del Sistema:** Instala el compilador de C++, las librerías para la ventana y el motor WebView (`webkit`).
    ```bash
    sudo apt update
    sudo apt install libwebkit2gtk-4.0-dev build-essential curl wget libssl-dev libgtk-3-dev libayatana-appindicator3-dev librsvg2-dev
    ```
3.  **Rust:** Instala Rust y Cargo.
    ```bash
    curl --proto '=https' --tlsv1.2 -sSf [https://sh.rustup.rs](https://sh.rustup.rs) | sh
    ```
    (Elige la opción 1 por defecto y luego reinicia tu terminal o ejecuta `source ~/.cargo/env`).

---

### 🛠️ Comandos del Proyecto (Windows y Ubuntu)

Una vez que los prerrequisitos están instalados, estos son los comandos que usarás dentro de esta carpeta (`/tauri`).

#### 1. Instalar Dependencias de JavaScript
Solo necesitas hacerlo la primera vez.
```bash
npm install
```

#### 2. Ejecutar en Modo Desarrollo
Inicia la aplicación para programar y ver los cambios en vivo.
```bash
npm run tauri dev
```
**Nota:** La primera vez que ejecutes este comando tardará bastante, porque `cargo` está compilando todo el backend de Rust. Las siguientes veces será casi instantáneo.

#### 3. Compilar y Empaquetar para Producción
Crea los instaladores finales para distribuir tu aplicación.
```bash
npm run tauri build
```
Encontrarás los archivos en la carpeta `/src-tauri/target/release/bundle/`.
* 📦 En **Windows**, creará un instalador `.msi`.
* 📦 En **Linux**, creará un paquete `.deb` y un `.AppImage`.