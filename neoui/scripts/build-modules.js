const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const libDir = path.join(__dirname, '..', 'lib');
const moduleDir = path.join(libDir, 'module');

// Create lib/module directory structure
function createDirectoryStructure() {
  const dirs = [
    'components/Alert',
    'components/Avatar',
    'components/Badge',
    'components/Box',
    'components/Button',
    'components/Chip',
    'components/Rating',
    'components/Skeleton',
    'components/TextField',
    'components/Ticker',
    'components/Toast',
    'components/Typography',
    'theme',
    'navigation',
  ];

  dirs.forEach((dir) => {
    const fullPath = path.join(moduleDir, dir);
    fs.mkdirSync(fullPath, { recursive: true });
  });

  // Create base module directory
  fs.mkdirSync(moduleDir, { recursive: true });
}

// Copy and transform files
function copyAndTransformFiles() {
  // Copy main index.js (we'll create a simple re-export)
  const mainIndex = `
// Theme exports
export * from './theme/index.js';

// Component exports
export { default as ParallaxScrollView } from './components/ParallaxScrollView.js';
export * from './components/ThemedText.js';
export * from './components/ThemedView.js';

// Navigation exports
export * from './navigation/index.js';

// Individual component exports
export * from './components/Alert/index.js';
export * from './components/Avatar/index.js';
export * from './components/Badge/index.js';
export * from './components/Box/index.js';
export * from './components/Button/index.js';
export * from './components/Chip/index.js';
export * from './components/Rating/index.js';
export * from './components/Skeleton/index.js';
export * from './components/TextField/index.js';
export * from './components/Ticker/index.js';
export * from './components/Toast/index.js';
export * from './components/Typography/index.js';
`;

  fs.writeFileSync(path.join(moduleDir, 'index.js'), mainIndex);

  // Create individual component exports
  const components = [
    'Alert',
    'Avatar',
    'Badge',
    'Box',
    'Button',
    'Chip',
    'Rating',
    'Skeleton',
    'TextField',
    'Ticker',
    'Toast',
    'Typography',
  ];

  components.forEach((component) => {
    const exportContent = `export * from '../../src/components/${component}/index.tsx';\n`;
    fs.writeFileSync(
      path.join(moduleDir, 'components', component, 'index.js'),
      exportContent
    );
  });

  // Create theme export
  const themeExport = `export * from '../../src/theme/index.ts';\n`;
  fs.writeFileSync(path.join(moduleDir, 'theme', 'index.js'), themeExport);

  // Create navigation export
  const navigationExport = `export * from '../../src/navigation/index.ts';\n`;
  fs.writeFileSync(
    path.join(moduleDir, 'navigation', 'index.js'),
    navigationExport
  );

  // Create individual component files
  const singleComponents = ['ParallaxScrollView', 'ThemedText', 'ThemedView'];
  singleComponents.forEach((component) => {
    const exportContent = `export * from '../../src/components/${component}.tsx';\n`;
    fs.writeFileSync(
      path.join(moduleDir, 'components', `${component}.js`),
      exportContent
    );
  });
}

// Run the build
console.log('Building module structure...');
createDirectoryStructure();
copyAndTransformFiles();
console.log('Module structure built successfully!');
