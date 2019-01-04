[![CircleCI](https://circleci.com/gh/ayildirim/bio2.svg?style=svg)](https://circleci.com/gh/ayildirim/bio2)
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/ayildirim/portfolio-page)

## Features
- Display data from LinkedIn profile data export ( Resume, Testimonial pages)
- PDF export of the Resume
- Google Analytics and GetClicky tracking
- Continuous Integration, Testing and Deployment with CircleCI
- Containerized deployment image with Docker

### Future Goals
- Decouple CSV,JSON data from the code, and move to MongoDB / GraphQL for the data
- Firebase Admin Login
- Hover over different parts of the page to see code for each section

## Tech stack
- React
- Docker
- Nginx

### Development environment
- Visual Studio Code is the configured tool for the project
- Configuration of vscode settings & extensions are in the /.vscode/settings.json

### JS Dev Utilities and Code Hygiene
- Yarn for dependency management
- Eslint for code syntax
- Prettier for code formatting
- Flow for data type safety
- Husky precommit hooks for running tests locally prior to commits made locally

### Tests
- CircleCI runs the test using Dockerfile.test container

### Deployment
- The procedure is configured in /.circleci/config.yml, under deploy step
- It only triggers when commits are merged into master branch
- It builds the release Docker image on CircleCI
- Docker is image is then pushed to Docker Hub
- Deploy_App.sh updates the running image on the DigitalOcean droplet
- Nginx domain/http access configuration is updated everytime for simplicity and sake of safety.

### Recommended Tools
- Use NVM to manage node versions
- Use NPX to run NPM modules in a temporary installation rather than adding as a dependency, specifically for modules that you use rarely or one time.
