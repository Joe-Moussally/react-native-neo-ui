#!/usr/bin/env node
/* eslint-env node */

const { execSync } = require('child_process');
const path = require('path');

const commands = {
  'build': 'npm run build',
  'watch': 'npm run build -- --watch',
  'example:ios': 'cd example && npm run ios',
  'example:android': 'cd example && npm run android',
  'example:web': 'cd example && npm run web',
  'test': 'npm test',
  'lint': 'npm run lint',
  'typecheck': 'npm run typecheck',
  'clean': 'npm run clean',
  'release': 'npm run release',
};

const command = process.argv[2];

if (!command || !commands[command]) {
  console.log('Available commands:');
  Object.keys(commands).forEach((cmd) => {
    console.log(`  npm run dev ${cmd}`);
  });
  process.exit(1);
}

try {
  execSync(commands[command], {
    stdio: 'inherit',
    // eslint-disable-next-line no-undef
    cwd: path.join(__dirname, '..'),
  });
} catch (error) {
  process.exit(error.status);
}
