# Project Todolist

# BRIEF DESCRIPTION

This website offers a comprehensive and user-friendly platform for exploring countries around the world, and the here's a breakdown of it's key feature :

- Search By CountryName
- Sort By CountryName
- Pagination
- Modal to show more detail of infomation

# Tech Stack

- ReactJS (state manangement [RTK Query])
- CSS
- Git

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Git Flow

### 1.Main Branch

- The main branch stores the official release history

### 2. Develop Branch

- the develop branch serves as an integration branch for features.
- New feature and fixes are merged into this branch.
- Represents the latest state of the application with features being developed

### 3. Feature Branch

- Developing in a separate branch keeps your main codebase stable and prevents accidental merges of incomplete work. It allows you to experiment and iterate on a feature without affecting the production-ready code.

- Different developers can work on individual branches simultaneously, encouraging parallel progress. By clearly naming branches and using pull requests for merging, your team can effectively review and integrate changes before pushing them to the main branch.

### 4. Release Branch

- To prepare a new version of our website for release:
- Create a release branch from the develop branch.
- Perform testing, bug fixes, and any final adjustments specific to the release.

### 5. Bugfix Branch

- if the code changes made from the feature branch were rejected after a release, sprint or demo, any necessary fixes after that should be done on the bugfix branch

### 6. Hotfix Branches

For critical bug fixes in the production codebase:

- Create a hotfix branch from the main branch.
  \*Fix the bug and ensure the fix is applied both to the main and develop branches.
