const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const buildTarget = args[0]; // 'electron', 'tauri', or undefined for both

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

console.log(`🏗️ Construyendo proyectos... (Target: ${buildTarget || 'ambos'})\n`);

// Función para ejecutar comando
function runCommand(command, cwd = null) {
  try {
    const options = { stdio: 'inherit' };
    if (cwd) options.cwd = cwd;
    execSync(command, options);
    return true;
  } catch (error) {
    console.error(`❌ Error ejecutando: ${command}`);
    return false;
  }
}

// Directorio de salida: ./output/
const outputDir = path.join(__dirname, 'output');

// Crear directorio output si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Build Electron
if (!buildTarget || buildTarget === 'electron') {
  console.log('Construyendo Electron...');
  if (runCommand(`${npmCmd} run make`, path.join(__dirname, 'electron'))) {
    const electronOut = path.join(outputDir, 'electron');
    if (!fs.existsSync(electronOut)) {
      fs.mkdirSync(electronOut, { recursive: true });
    }
    // Copiar out/make/* a ./output/electron/
    const distPath = path.join(__dirname, 'electron', 'out', 'make');
    if (fs.existsSync(distPath)) {
      execSync(`xcopy "${distPath}\\*" "${electronOut}\\" /E /I /Y`, { stdio: 'pipe' });
      console.log(`✅ Electron construido en ${electronOut}\n`);
    }
  } else {
    console.log('❌ Falló build de Electron\n');
  }
}

// Build Tauri
if (!buildTarget || buildTarget === 'tauri') {
  console.log('Construyendo Tauri...');
  if (runCommand(`${npmCmd} run tauri build`, path.join(__dirname, 'tauri'))) {
    const tauriOut = path.join(outputDir, 'tauri');
    if (!fs.existsSync(tauriOut)) {
      fs.mkdirSync(tauriOut, { recursive: true });
    }
    // Copiar src-tauri/target/release/bundle/* a ./output/tauri/
    const bundlePath = path.join(__dirname, 'tauri', 'src-tauri', 'target', 'release', 'bundle');
    if (fs.existsSync(bundlePath)) {
      execSync(`xcopy "${bundlePath}\\*" "${tauriOut}\\" /E /I /Y`, { stdio: 'pipe' });
      console.log(`✅ Tauri construido en ${tauriOut}\n`);
    }
  } else {
    console.log('❌ Falló build de Tauri\n');
  }
}

console.log(`🎉 Builds completados. Revisa ${outputDir} para los instaladores/portables.`);