[![CircleCI](https://circleci.com/gh/ayildirim/bio2.svg?style=svg)](https://circleci.com/gh/ayildirim/bio2)
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/ayildirim/portfolio-page)

## Tech stack
- React

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
- CircleCI runs "yarn test" as configured in /.circleci/config.yml

### Deployment
- The procedure is configured in /.circleci/config.yml, under deploy step
- It only triggers when commits are merged into master branch
- CircleCI builds the static page from the react app
- Deploys the static page onto "gh-pages" repository
- Push to "gh-pages" triggers the Github Webhook
- Github Webhook informs RunCloud of the push
- RunCloud pulls the new version of the site, and updates on DigitalOcean

### Recommended Tools
- Use NVM to manage node versions
- Use NPX to run NPM modules in a temporary installation rather than adding as a dependency, specifically for modules that you use rarely or one time.

### Future Goals
- Take data in from LinkedIn profile
- Add some basic styling to the page
