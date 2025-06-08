# Release Setup Guide

This guide will help you set up automated releases for @neoui/core using semantic-release and GitHub Actions.

## 🔐 Required GitHub Secrets

You need to add the following secrets to your GitHub repository:

### 1. NPM_TOKEN

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `NPM_TOKEN`
5. Value: `YOUR_TOKEN_HERE`

### 2. GITHUB_TOKEN (Automatically Available)

The `GITHUB_TOKEN` is automatically provided by GitHub Actions, so you don't need to set it up manually.

## 🚀 How It Works

### Automatic Releases

The semantic-release workflow will automatically:

1. **Analyze commits** on `main` and `builder-bob` branches
2. **Determine version bump** based on conventional commits:
   - `feat:` → Minor version bump (0.1.0 → 0.2.0)
   - `fix:` → Patch version bump (0.1.0 → 0.1.1)
   - `BREAKING CHANGE:` → Major version bump (0.1.0 → 1.0.0)
3. **Generate changelog** automatically
4. **Build the library** using `bob build`
5. **Publish to NPM** with the new version
6. **Create GitHub release** with release notes
7. **Commit updated files** (package.json, CHANGELOG.md)

### Conventional Commit Format

To trigger releases, use conventional commit messages:

```bash
# Features (minor version bump)
git commit -m "feat: add new Button component"
git commit -m "feat(theme): add dark mode support"

# Bug fixes (patch version bump)
git commit -m "fix: resolve theme provider memory leak"
git commit -m "fix(button): correct disabled state styling"

# Breaking changes (major version bump)
git commit -m "feat!: redesign theme API"
git commit -m "feat: remove deprecated components

BREAKING CHANGE: The old theme API has been removed in favor of the new design system."

# Chores (no release)
git commit -m "chore: update dependencies"
git commit -m "docs: update README"
```

## 📦 Release Branches

Releases are triggered on pushes to:

- `main` - Production releases
- `builder-bob` - Beta/development releases

## 🔍 Dependencies Management

Dependabot is configured to:

- Check for updates **weekly**
- Create PRs with conventional commit messages
- Update dependencies in all packages (`/`, `/neoui`, `/example`)
- Update GitHub Actions

## 🛠 Manual Release (if needed)

To manually trigger a release:

```bash
cd neoui
npm run semantic-release
```

## 📋 Pre-Release Checklist

Before pushing to trigger a release:

1. ✅ All tests pass: `npm test`
2. ✅ Linting passes: `npm run lint`
3. ✅ TypeScript checks pass: `npm run typecheck`
4. ✅ Library builds successfully: `npm run build`
5. ✅ Commit messages follow conventional format
6. ✅ NPM_TOKEN is set in GitHub secrets

## 🔒 Security Notes

- The NPM token has been configured with appropriate scopes for publishing
- GitHub Actions will only run on the specified branches
- All workflows require proper permissions and authentication

## 📚 Resources

- [Semantic Release Documentation](https://semantic-release.gitbook.io/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
