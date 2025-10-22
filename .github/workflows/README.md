# GitHub Actions Workflows

This directory contains GitHub Actions workflows for deploying your 3D Car Racing Game to GitHub Pages.

## Available Workflows

### 1. `deploy.yml` (Currently Active)
**Single-job deployment** - Builds and deploys in one job.

**Pros:**
- Simpler, faster execution
- Fewer steps to debug
- Good for smaller projects

**When to use:** Default choice for most cases.

---

### 2. `pages.yml` (Alternative)
**Two-job deployment** - Separate build and deploy jobs.

**Pros:**
- Better organization (build vs deploy separation)
- Can reuse build artifacts
- Easier to debug specific stages

**When to use:** 
- If you want clearer separation of concerns
- If you need to run tests between build and deploy
- If you're deploying the same build to multiple environments

---

## How to Switch Workflows

You can use either workflow, or keep both (GitHub will run both on push to main).

### To use only `pages.yml`:
1. Rename or delete `deploy.yml`
2. Push changes to GitHub

```powershell
# Delete deploy.yml
Remove-Item .github/workflows/deploy.yml

# Commit and push
git add .
git commit -m "Switch to pages.yml workflow"
git push
```

### To use only `deploy.yml`:
1. Rename or delete `pages.yml`
2. Push changes to GitHub

```powershell
# Delete pages.yml
Remove-Item .github/workflows/pages.yml

# Commit and push
git add .
git commit -m "Use deploy.yml workflow"
git push
```

---

## GitHub Pages Setup Required

After pushing your workflow file, you need to enable GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings**
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select **GitHub Actions** ⚠️ Important!
5. Save

---

## Workflow Triggers

Both workflows trigger on:
- **Push to main branch** - Automatic deployment on code changes
- **Manual dispatch** - Run from Actions tab anytime

---

## Viewing Deployment Status

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Click on the latest workflow run
4. Check the status:
   - 🟠 Orange dot = Running
   - ✅ Green checkmark = Success
   - ❌ Red X = Failed

---

## Your Game URL

After successful deployment:
```
https://sravan1023.github.io/Drive-Sandbox/
```

---

## Troubleshooting

### Workflow fails at "Install dependencies"
- Check that `package.json` is valid
- Try running `npm ci` locally first

### Workflow fails at "Build"
- Run `npm run build` locally to test
- Check for build errors in the Actions log

### 404 error on deployed site
- Wait 5-10 minutes after first deployment
- Verify GitHub Pages source is set to "GitHub Actions"
- Check that repository is Public

### Changes not appearing
- Clear browser cache (Ctrl+Shift+R)
- Wait for workflow to complete (check Actions tab)
- Verify workflow ran successfully

---

## Recommendation

**Keep `deploy.yml`** - It's simpler and works great for this project!

You can safely delete `pages.yml` if you don't need it:
```powershell
Remove-Item .github/workflows/pages.yml
git add .
git commit -m "Remove unused pages.yml workflow"
git push
```
