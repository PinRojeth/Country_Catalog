# Project Todolist 

# BRIEF DESCRIPTION


This website offers a comprehensive and user-friendly platform for exploring countries around the world, and the  here's a breakdown of it's key feature : 
* Search By CountryName
* Sort By CountryName
* Pagination 
* Modal to show more detail of infomation



# Tech Stack
* ReactJS (state manangement [RTK Query])
* CSS
* Git


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Git Flow 

### 1.Main Branch 
* The main branch stores the official release history

### 2. Develop Branch
* the develop branch serves as an integration branch for features.
* New feature and fixes are merged into this branch.
* Represents the latest state of the application with features being developed
### 3. Feature Branch
These are the feature that have in this todo app.
* `CreateTask Feature` : Create Feature will allowed you to create each of your task.
* `TaskDisplay Feature` : TaskDisplay Feature will allowed to see each task that you have created.
* `RenderTask Feature` : RenderTask Feature will render each task that you have created and display it as a list of your task
* `EditTask Feature` : This Feature will allow you to modify each task that you want to modify.
* `DeleteTask Feature` : This Feature will allow you to delete each task.
### 4. Release Branch 
* To prepare a new version of our website for release:
* Create a release branch from the develop branch.
* Perform testing, bug fixes, and any final adjustments specific to the release.
### 5. Bugfix Branch
* if the code changes made from the feature branch were rejected after a release, sprint or demo, any necessary fixes after that should be done on the bugfix branch
### 6. Hotfix Branches 
For critical bug fixes in the production codebase:
* Create a hotfix branch from the main branch.
*Fix the bug and ensure the fix is applied both to the main and develop branches.