# Instructions to Upload React_practice to GitHub

## Step 1: Install Git (if not already installed)
1. Download Git from: https://git-scm.com/download/win
2. During installation, make sure to select "Add Git to PATH"
3. Restart PowerShell after installation

## Step 2: Navigate to React_practice folder
```powershell
cd "C:\Users\lenovo\Desktop\reactjs\React_practice"
```

## Step 3: Initialize Git (if not already initialized)
```powershell
git init
```

## Step 4: Add your GitHub repository as remote
```powershell
git remote add origin https://github.com/Rehansajid2130/React_Practice.git
```

If you get an error that the remote already exists, remove it first:
```powershell
git remote remove origin
git remote add origin https://github.com/Rehansajid2130/React_Practice.git
```

## Step 5: Configure Git (first time only, if needed)
```powershell
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

## Step 6: Stage all files
```powershell
git add .
```

## Step 7: Commit the files
```powershell
git commit -m "Initial commit: React practice projects with README and .gitignore"
```

## Step 8: Push to GitHub
```powershell
git branch -M main
git push -u origin main
```

**Note:** You may be prompted to enter your GitHub username and password (or personal access token) when pushing.

---

## Alternative: Using GitHub Desktop (GUI Method)

If you prefer a graphical interface:
1. Download GitHub Desktop from: https://desktop.github.com/
2. Sign in with your GitHub account
3. Click "File" → "Add Local Repository"
4. Select the `React_practice` folder
5. Click "Publish repository" to upload it to GitHub


