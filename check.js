const { execSync } = require('child_process');
const os = require('os');

const npmCmd = os.platform() === 'win32' ? 'npm.cmd' : 'npm';

console.log('🔍 Validando dependencias del sistema y proyectos...\n');

// Verificar Rust y Cargo
try {
  console.log('Verificando Rust y Cargo...');
  execSync('cargo --version', { stdio: 'pipe' });
  execSync('rustc --version', { stdio: 'pipe' });
  console.log('✅ Rust y Cargo instalados\n');
} catch (error) {
  console.log('❌ Rust o Cargo no encontrados. Instala Rust desde https://rustup.rs/\n');
}

// Verificar herramientas de compilación según SO
const platform = os.platform();
if (platform === 'win32') {
  try {
    console.log('Verificando C++ Build Tools (Windows)...');
    execSync('where link.exe >nul 2>&1', { stdio: 'pipe' });
    console.log('✅ C++ Build Tools encontrados\n');
  } catch (error) {
    console.log('❌ C++ Build Tools no encontrados. Instala Visual Studio Build Tools con workload "Desktop development with C++"\n');
  }
} else if (platform === 'linux') {
  try {
    console.log('Verificando build-essential y dependencias (Linux)...');
    execSync('gcc --version', { stdio: 'pipe' });
    execSync('pkg-config --modversion webkit2gtk-4.0', { stdio: 'pipe' });
    console.log('✅ Dependencias de Linux encontradas\n');
  } catch (error) {
    console.log('❌ Dependencias faltantes en Linux. Ejecuta: sudo apt install build-essential libwebkit2gtk-4.0-dev\n');
  }
}

// Verificar dependencias npm de Electron
try {
  console.log('Verificando dependencias npm de Electron...');
  execSync(`cd electron && ${npmCmd} install --dry-run`, { stdio: 'pipe' });
  console.log('✅ Dependencias de Electron OK\n');
} catch (error) {
  console.log('❌ Error en dependencias de Electron\n');
}

// Verificar dependencias npm de Tauri
try {
  console.log('Verificando dependencias npm de Tauri...');
  execSync(`cd tauri && ${npmCmd} install --dry-run`, { stdio: 'pipe' });
  console.log('✅ Dependencias de Tauri OK\n');
} catch (error) {
  console.log('❌ Error en dependencias de Tauri\n');
}

console.log('🎉 Validación completada. Revisa los mensajes arriba para cualquier problema.');