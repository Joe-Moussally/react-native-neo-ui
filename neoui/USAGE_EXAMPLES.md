# @joe111/neo-ui - Development & Publishing Guide

## 🧪 Local Testing Before Publishing

### Method 1: Using npm link (Recommended)

This method creates a symlink to your local package, allowing you to test it in other projects:

```bash
# 1. In your neo-ui package directory
cd /path/to/react-native-neo-ui/neoui
npm run build

# 2. Create a global symlink
npm link

# 3. In your test project directory
cd /path/to/your-test-project
npm link @joe111/neo-ui

# 4. Test your components
import { Button, useTheme } from '@joe111/neo-ui';
```

**Cleanup after testing:**
```bash
# In your test project
npm unlink @joe111/neo-ui

# In your neo-ui package directory
npm unlink
```

### Method 2: Using npm pack

This method creates a tarball that simulates the actual published package:

```bash
# 1. Build and pack your package
npm run build
npm pack

# 2. This creates a file like: joe111-neo-ui-1.3.5.tgz
# 3. Install it in your test project
cd /path/to/your-test-project
npm install /path/to/neo-ui/joe111-neo-ui-1.3.5.tgz

# 4. Test your components
import { Button } from '@joe111/neo-ui';
```

### Method 3: Using the Example App

The package includes an example app for testing:

```bash
# 1. Build the library
npm run build

# 2. Start the example app
npm run example start

# 3. Run on your preferred platform
npm run dev example:ios     # iOS
npm run dev example:android # Android
npm run dev example:web     # Web
```

### Method 4: Using Verdaccio (Local NPM Registry)

For the most accurate testing experience:

```bash
# 1. Install Verdaccio globally
npm install -g verdaccio

# 2. Start local registry
verdaccio

# 3. Publish to local registry
npm publish --registry http://localhost:4873

# 4. In your test project, install from local registry
npm install @joe111/neo-ui --registry http://localhost:4873
```

## 📦 Publishing Updates - Step by Step Guide

### Prerequisites

1. **NPM Account**: Ensure you have an npm account and are logged in
   ```bash
   npm whoami  # Check if logged in
   npm login   # Login if needed
   ```

2. **Repository Access**: Ensure you have write access to the GitHub repository

3. **Environment Setup**: Make sure all dependencies are installed
   ```bash
   npm install
   ```

### Step 1: Pre-Publishing Checklist

```bash
# 1. Ensure you're on the main branch
git checkout main
git pull origin main

# 2. Clean build
npm run clean
npm run build

# 3. Run all tests
npm test

# 4. Run linting
npm run lint

# 5. Type checking
npm run typecheck

# 6. Test locally (use any method above)
npm run dev build
npm link  # Test in another project
```

### Step 2: Version Management

The package uses semantic-release for automated versioning. However, you can also manually version:

#### Option A: Automatic Versioning (Recommended)
```bash
# Commit your changes with conventional commit messages
git add .
git commit -m "feat: add new component"
git commit -m "fix: resolve button styling issue"
git commit -m "docs: update documentation"

# Push to trigger automatic release
git push origin main
```

#### Option B: Manual Versioning
```bash
# Update version in package.json
npm version patch   # 1.3.5 -> 1.3.6 (bug fixes)
npm version minor   # 1.3.5 -> 1.4.0 (new features)
npm version major   # 1.3.5 -> 2.0.0 (breaking changes)
```

### Step 3: Update Documentation

1. **Update CHANGELOG.md** (if not using semantic-release):
   ```markdown
   ## [1.3.6] - 2024-01-XX
   ### Added
   - New component XYZ
   ### Fixed
   - Button styling issue
   ### Changed
   - Updated theme system
   ```

2. **Update README.md** if needed with new features/usage

### Step 4: Final Build and Publish

```bash
# 1. Final clean build
npm run clean
npm run build

# 2. Final tests
npm test

# 3. Publish to npm
npm publish

# If scoped package and first time publishing:
npm publish --access public
```

### Step 5: Post-Publishing Tasks

```bash
# 1. Push version tags to GitHub (if manually versioned)
git push --tags

# 2. Create a GitHub release
# Go to GitHub releases page and create a new release

# 3. Test the published package
npm install @joe111/neo-ui@latest -g
# Or test in a fresh project
```

## 🔄 Continuous Integration Setup

### GitHub Actions Workflow

Create `.github/workflows/ci.yml`:

```yaml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm test
      - run: npm run build
```

### Automated Publishing Workflow

Create `.github/workflows/release.yml`:

```yaml
name: Release
on:
  push:
    branches: [main]

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npx semantic-release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## 🚀 Quick Publishing Commands

```bash
# Quick publish workflow
npm run clean && npm run build && npm test && npm publish

# Full release workflow
npm run clean && npm run build && npm run lint && npm run typecheck && npm test && npm publish

# Development workflow
npm run dev build    # Clean build
npm run dev test     # Run tests
npm run dev lint     # Lint code
```

## 📋 Publishing Checklist

- [ ] All tests passing
- [ ] Linting passes
- [ ] Type checking passes
- [ ] Local testing completed
- [ ] Documentation updated
- [ ] Changelog updated (if manual)
- [ ] Version bumped (if manual)
- [ ] Built successfully
- [ ] Published to npm
- [ ] GitHub release created
- [ ] Tags pushed to repository

## 🐛 Troubleshooting

### Common Issues

1. **"npm ERR! 403 403 Forbidden"**
   - Check if you're logged in: `npm whoami`
   - Verify package name availability
   - Check npm access permissions

2. **"Module not found" after publishing**
   - Verify package.json exports
   - Check if build artifacts are included
   - Ensure main/types fields are correct

3. **TypeScript declaration issues**
   - Run `npm run build` to generate .d.ts files
   - Check tsconfig.types.json configuration
   - Verify lib/typescript directory exists

4. **Version conflicts**
   - Check if version already exists on npm
   - Use `npm view @joe111/neo-ui versions --json` to see published versions

### Reset Steps

If you need to start fresh:

```bash
# Clean everything
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📞 Support

- GitHub Issues: [Create an issue](https://github.com/Joe-Moussally/react-native-neo-ui/issues)
- Email: joemoussally111@gmail.com
